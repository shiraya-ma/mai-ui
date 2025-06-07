'use strict';

/**
 * Function to generate an ID from children.
 * 
 * Used for creating H1 IDs and TOC hrefs.
 * 
 * @internal 
 */
export function generateIDFromChildren (children: string): string {
  const id = children.trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return id;
};
