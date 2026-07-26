#!/bin/sh
set -eu

BASE="/opt/pkaylabs"
SHA="${1:-}"

if test "${#SHA}" -ne 40; then
	echo "Expected a 40-character lowercase Git commit SHA." >&2
	exit 2
fi

case "$SHA" in
	*[!0-9a-f]*)
		echo "Expected a 40-character lowercase Git commit SHA." >&2
		exit 2
		;;
esac

ARCHIVE="/tmp/pkaylabs-${SHA}.tar.gz"
RELEASES="${BASE}/releases"
RELEASE="${RELEASES}/${SHA}"
STAGE="${RELEASES}/.${SHA}.tmp"
NEXT_LINK="${BASE}/.current-${SHA}"

test -f "$ARCHIVE" || {
	echo "Release archive not found: ${ARCHIVE}" >&2
	exit 3
}

mkdir -p "$RELEASES"
rm -rf "$STAGE"
mkdir "$STAGE"
tar --no-same-owner -xzf "$ARCHIVE" -C "$STAGE"

test -f "$STAGE/index.html" || {
	echo "Release does not contain index.html." >&2
	rm -rf "$STAGE"
	exit 4
}

if test -d "$RELEASE"; then
	rm -rf "$STAGE"
else
	mv "$STAGE" "$RELEASE"
fi

rm -f "$NEXT_LINK"
ln -s "releases/${SHA}" "$NEXT_LINK"
mv -Tf "$NEXT_LINK" "${BASE}/current"

docker compose -f "${BASE}/docker-compose.yml" up -d --remove-orphans

attempt=0
until docker exec pkaylabs-web wget -q -O /dev/null http://127.0.0.1/healthz; do
	attempt=$((attempt + 1))
	if test "$attempt" -ge 20; then
		echo "pkaylabs-web did not become healthy." >&2
		exit 5
	fi
	sleep 1
done

rm -f "$ARCHIVE"
echo "Activated PKay Labs release ${SHA}."
