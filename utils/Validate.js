
import { parse, isDate } from "date-fns";

export function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "MM.dd.yyyy", new Date());

  return parsedDate;
}
