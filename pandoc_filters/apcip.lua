local locationPattern = "{(%d+%.%d+%.%d+)}"
local authors = {}
local title = ""
local urn = "urn:cts:greekLit:tlg0525.tlg001.apcip-nagy"

function Meta(m)
    m.authors = authors
    m.base_urn = urn
    m.title = title

    return m
end

-- function Para(para)
--     if para.content[1].text ~= nil then
--         local _, _, location = para.content[1].text:find(locationPattern)

--         if location ~= nil then
--             local citation = "@" .. urn .. ":" .. location

--             return {
--                 pandoc.Header(3, pandoc.Str(citation))
--             }
--         end
--     end

--     return para
-- end


function Str(str)
    local _, _, location = str.text:find(locationPattern)

    if location ~= nil then
        local citation = "@" .. urn .. ":" .. location

        return {
            pandoc.Str("---"),
            pandoc.Str("\n\n"),
            pandoc.Str(citation),
            pandoc.Str("\n\n")
        }
    end
end

function Div(div)
    local custom_style = div.attributes["custom-style"]

    if custom_style == "chs_h2" then
        return pandoc.Header(2, pandoc.utils.stringify(div.content), div.attr, div.classes)
    end

    if custom_style == "chs_h3" then
        -- we need to unwrap chs_h3 headings because they
        -- contain the references that are turned into URNs
        -- in the next filter
        return div.content
    end

    if custom_style == "chs_h4" then
        return pandoc.Header(4, pandoc.utils.stringify(div.content), div.attr, div.classes)
    end

    if custom_style == "chs_h5" then
        return pandoc.Header(5, pandoc.utils.stringify(div.content), div.attr, div.classes)
    end

    if custom_style == "chs_h6" then
        return pandoc.Header(6, pandoc.utils.stringify(div.content), div.attr, div.classes)
    end

    if custom_style == "chs_essay_author" then
        table.insert(authors, pandoc.utils.stringify(div.content))
        return pandoc.Str("")
    end

    if custom_style == "chs_chapter_title" then
        title = pandoc.utils.stringify(div.content)
        return pandoc.Str("")
    end

    if custom_style == "chs_normal" or
        custom_style == "chs_normal_posthead" then
        return div.content
    end

    return div
end

function Span(span)
    if span.attributes["custom-style"] == "chs_translit_Greek" then
        return pandoc.Emph(span.content)
    end

    return span
end
