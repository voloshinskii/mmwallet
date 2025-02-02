import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const resStatus = await fetch(`/api/status`);
    const status = await resStatus.json();

    const resLatest = await fetch(`/api/latest`);
    const latest = await resLatest.json();

    return {
        now: new Date().toLocaleString('ru-RU', { timeZone: 'UTC' }),
        statuses: status,
        latest: latest.latests,
    };
}) satisfies PageLoad;
