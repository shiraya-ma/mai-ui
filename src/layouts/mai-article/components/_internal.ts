'use strict';

/** @internal */
export function _parseDateInfo (label: string, date: string | number | Date | undefined): DateInfo | undefined {
  if (!date) return undefined;

  const _date = new Date(date);
  if (isNaN(_date.getTime())) throw new Error('date is invalid');

  const yyyy = _date.getFullYear();
  const mm   = String(_date.getMonth() + 1).padStart(2, '0');
  const dd   = String(_date.getDate()).padStart(2, '0');
  const HH   = String(_date.getHours()).padStart(2, '0');
  const MM   = String(_date.getMinutes()).padStart(2, '0');
  const SS   = String(_date.getSeconds()).padStart(2, '0');
  
  const _stringifiedDate = `${yyyy}/${mm}/${dd} ${HH}:${MM}:${SS}`;

  return {
    label,
    date: _stringifiedDate,
  };
};

export type DateInfo = {
  label: string;
  date: string;
};
