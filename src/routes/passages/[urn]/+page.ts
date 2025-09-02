import { error } from '@sveltejs/kit';
import { paginateAPCIP } from '$lib/functions';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params: _params }) => {
  paginateAPCIP();

  error(404, 'Not Found');
}
