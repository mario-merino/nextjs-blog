/*
 * File: date.js
 * Project: learn-starter
 * File Created: Wednesday, 24th June 2020 8:39:49 am
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Wednesday, 24th June 2020 8:39:55 am
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
