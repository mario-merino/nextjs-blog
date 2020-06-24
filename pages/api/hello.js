/*
 * File: hello.js
 * Project: learn-starter
 * File Created: Wednesday, 24th June 2020 10:55:58 am
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Wednesday, 24th June 2020 10:57:44 am
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */
export default (req, res) => {
	setTimeout(() => res.status(200).json({ text: 'Hello' }), 3000);
};
