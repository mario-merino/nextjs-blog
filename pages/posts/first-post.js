/*
 * File: first-post.js
 * Project: learn-starter
 * File Created: Tuesday, 23rd June 2020 3:54:03 pm
 * Author: Mario Merino (mario@inventures.cl)
 * -----
 * Last Modified: Tuesday, 23rd June 2020 4:21:02 pm
 * Modified By: Mario Merino (mario@inventures.cl)
 * -----
 * Copyright 2019 - 2020 Incrementa Ventures SpA. ALL RIGHTS RESERVED
 * Terms and conditions defined in license.txt
 * -----
 * Inventures - www.inventures.cl
 */

import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href='/'>
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
}
