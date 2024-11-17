#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Wait for the backend to be up, if we know where it is.
if [ -n "$POSTGRES_HOST" ]; then
  /usr/src/app/wait-for-it.sh "$POSTGRES_HOST:${POSTGRES_PORT:-5432}"
fi

# Run the main container command.
exec "$@"