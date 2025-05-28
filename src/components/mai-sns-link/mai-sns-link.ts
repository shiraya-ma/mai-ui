'use strict';

import { MaiInstagramLink } from "./mai-instagram-link";
import { MaiPixivLink } from "./mai-pixiv-link";
import { MaiTwitterLink } from "./mai-twitter-link";

/**
 * SNS link components for Mai UI.
 * 
 * Can be imported individually or as a group.
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiSNSLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *    return (
 *      <p>
 *        <MaiSNSLink.Twitter/>
 *        <br/>
 *        <MaiSNSLink.Instagram/>
 *        <br/>
 *        <MaiSNSLink.Pixiv/>
 *      </p>
 *    );
 * };
 */
export const MaiSNSLink = {
  Instagram: MaiInstagramLink,
  Pixiv: MaiPixivLink,
  Twitter: MaiTwitterLink
};
