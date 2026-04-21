// Claude API key read from import.meta.env.VITE_ANTHROPIC_API_KEY (never process.env)

export const CREATION_PROMPT_TEMPLATE = `You are the app generator for Make.app. Generate a single self-contained HTML file that works as a mobile mini-app.

USER DESCRIPTION:
{{description}}

PLAN ANSWERS:
{{planAnswers}}

TECHNICAL REQUIREMENTS:
- Single HTML file
- Required in <head>:
  <meta name="color-scheme" content="light">
  <meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content">
  <script src="https://cdn.tailwindcss.com"></script>
- Force light mode on ALL color values with !important — Safari dark mode will override without it
- html and body: background #F7F7F8 !important, color #111114 !important
- Never use emoji for UI elements — pure CSS shapes only
- Data bridge — never use localStorage, parent shell owns all data:
  Receive: window.addEventListener('message', (e) => { const d = JSON.parse(e.data); if(d.type==='LOAD_DATA') renderWithData(d.payload) })
  Send save: window.parent.postMessage(JSON.stringify({ type: 'SAVE_ENTRY', payload: {...} }), '*')
  Send delete: window.parent.postMessage(JSON.stringify({ type: 'DELETE_ENTRY', id: '...' }), '*')

DESIGN REQUIREMENTS:
- Tailwind utilities for layout and spacing
- Off-white background, white card surfaces, blue accent used sparingly
- Title: text-2xl font-bold max
- Touch targets: minimum h-11 on all interactive elements
- Empty state: friendly and instructive
- Generate great defaults

SCHEMA:
Return one line before the HTML:
SCHEMA: {"type":"list","fields":["id","field1","field2"]}

OUTPUT:
SCHEMA line first, then raw HTML starting with <!DOCTYPE html>. No markdown, no explanation.`

export const EDIT_PROMPT_TEMPLATE = `You are the app generator for Make.app. Update an existing mini-app.

CURRENT HTML:
{{currentHtml}}

CURRENT SCHEMA:
{{currentSchema}}

USER REQUEST:
{{userRequest}}

RULES:
- Preserve all existing functionality unless asked to remove it
- Preserve existing schema field names — add new fields freely, never rename or remove existing ones
- Apply all same technical requirements (light mode !important, postMessage bridge, Tailwind CDN)
- Keep the same visual identity unless asked to change it

OUTPUT:
Updated SCHEMA line if schema changed, then raw HTML. No markdown, no explanation.`

export function parseGenerationResponse(response: string): { schema: string; html: string } {
  const lines = response.trim().split('\n')
  const schemaLine = lines.find(l => l.startsWith('SCHEMA:'))
  const schema = schemaLine ? schemaLine.replace('SCHEMA:', '').trim() : '{}'
  const htmlStart = response.indexOf('<!DOCTYPE html>')
  const html = htmlStart >= 0 ? response.slice(htmlStart) : response
  return { schema, html }
}

export async function generateApp(
  _description: string,
  _planAnswers: string,
): Promise<{ schema: string; html: string }> {
  // TODO Session 5: implement with Anthropic API
  // const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  throw new Error('generateApp not implemented yet — coming in Session 5')
}

export async function editApp(
  _currentHtml: string,
  _currentSchema: string,
  _userRequest: string,
): Promise<{ schema: string; html: string }> {
  // TODO Session 7: implement with Anthropic API
  throw new Error('editApp not implemented yet — coming in Session 7')
}
