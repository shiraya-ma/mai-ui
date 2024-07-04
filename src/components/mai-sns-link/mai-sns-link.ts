'use strict';
import { Instagram } from "./instagram";
import { Pixiv } from "./pixiv";
import { Twitter } from "./twitter";

/**
 * SNSリンクのコンポーネント
 * 
 * 個別のインポートも可能
 * 
 * @param props 
 * @returns 
 * @example
 * 'use strict'
 * import { MaiSNSLink } from '@shiraya-ma/mai-ui';
 * 
 * function App () {
 *      return (
 *          <p>
 *              <MaiSNSLink.Twitter id="elonmusk"/>
 *              <br/>
 *              <MaiSNSLink.Instagram/>
 *              <br/>
 *              <MaiSNSLink.Pixiv/>
 *          </p>
 *      );
 * };
 */
export const MaiSNSLink = {
    Instagram,
    Pixiv,
    Twitter
};
