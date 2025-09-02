import fs from 'node:fs';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { visit } from 'unist-util-visit';
import CTS_URN from './cts_urn';

import type { Heading, Text } from 'mdast';

export function paginateAPCIP() {
  const apcip = fs.readFileSync("static/commentaries/tlg0525.tlg001.apcip-nagy.md").toString("utf-8");
  const tree = fromMarkdown(apcip);
  const headings: Heading[] = [];

  visit(tree, (n => {
    if (n.type === "heading" && n.depth <= 3) {
      headings.push(n);
    }
  }));

  const scrollHeadings = headings.filter(t => t.depth === 2);
  const paragraphHeadings = headings.filter(t => t.depth === 3);

  console.log(scrollHeadings.length)
  const paragraphUrns = paragraphHeadings
    .map(h => new CTS_URN(
      (h.children[0] as Text).value.replace("@", ""))
    );

  return apcip;
}

export async function paginateAPRIP() {
  const aprip = fs.readFileSync("static/editions/tlg0525.tlg001.aprip-nagy.md");

  return aprip;
}
