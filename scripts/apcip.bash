#!/usr/bin/env bash

FILE="static/commentaries/apcip.docx"

pandoc --lua-filter pandoc_filters/apcip.lua \
    -f docx+styles --track-changes=accept \
    --extract-media=static/commentaries/img "$FILE" \
    --standalone \
    -t gfm -o static/commentaries/tlg0525.tlg001.apcip-nagy.md && \
    gsed -i 's/static//g' 'static/commentaries/tlg0525.tlg001.apcip-nagy.md'
