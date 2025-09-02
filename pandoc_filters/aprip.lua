local locationPattern = "{(%d+%.%d+%.%d+)}"
local authors = {}
local urn = "urn:cts:greekLit:tlg0525.tlg001.aprip-nagy"
local title = ""

local function slice(t, start, stop)
    local sliced = {}
    for i = start, stop or #t do
        table.insert(sliced, t[i])
    end
    return sliced
end

function Meta(m)
    m.authors = authors
    m.base_urn = urn
    m.title = title

    return m
end

function Para(para)
    if para.content[1].text ~= nil then
        local _, _, location = para.content[1].text:find(locationPattern)

        if location ~= nil then
            local citation = "@" .. urn .. ":" .. location

            return pandoc.Div({
                pandoc.Para(pandoc.utils.stringify(para.content[1].text:gsub(locationPattern, ""))),
                pandoc.Para(slice(para.content, 2, #para.content))
            }, { id = citation })
        end
    end

    return para
end

function Div(div)
    if div.attributes["custom-style"] == "chs_h1" then
        title = pandoc.utils.stringify(div.content)
        return pandoc.Str("")
    end

    if div.attributes["custom-style"] == "chs_h2" then
        return pandoc.Header(2, pandoc.utils.stringify(div.content), div.attr, div.classes)
    end

    if div.attributes["custom-style"] == "chs_essay_author" then
        table.insert(authors, pandoc.utils.stringify(div.content))
        return pandoc.Str("")
    end

    if div.attributes["custom-style"] == "chs_normal" then
        return div.content
    end

    return div
end
