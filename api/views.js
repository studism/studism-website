export default async function handler(req, res) {
  // CORSヘッダー
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Topic ID is required' });
  }

  try {
    const serviceDomain = process.env.VITE_MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.VITE_MICROCMS_API_KEY;

    // 現在の閲覧数を取得
    const getResponse = await fetch(
      `https://${serviceDomain}.microcms.io/api/v1/topics/${id}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
        },
      }
    );

    if (!getResponse.ok) {
      throw new Error('Failed to fetch topic');
    }

    const topic = await getResponse.json();
    const currentViews = parseInt(topic.views || '0', 10);
    const newViews = currentViews + 1;

    // 閲覧数を更新
    const patchResponse = await fetch(
      `https://${serviceDomain}.microcms.io/api/v1/topics/${id}`,
      {
        method: 'PATCH',
        headers: {
          'X-MICROCMS-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ views: String(newViews) }),
      }
    );

    if (!patchResponse.ok) {
      throw new Error('Failed to update views');
    }

    return res.status(200).json({ views: newViews });
  } catch (error) {
    console.error('Error updating views:', error);
    return res.status(500).json({ error: 'Failed to update views' });
  }
}
