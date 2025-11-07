const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4001';

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}

export async function getMe(token?: string) {
  const res = await fetch(`${API_BASE}/auth/me`, {
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  });
  if (!res.ok) throw new Error('Unauthorized');
  return res.json();
}

// course-service runs on 4003 (docker-compose maps it there)
const COURSE_BASE = process.env.REACT_APP_COURSE_BASE || 'http://localhost:4003';
export async function getCourses() {
  const res = await fetch(`${COURSE_BASE}/courses`);
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
}
