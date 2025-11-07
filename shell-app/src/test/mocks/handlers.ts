import { http, HttpResponse } from 'msw';

const mockUser = {
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  role: 'student'
};

// Define the expected structure of the request body
interface LoginRequestBody {
  email: string;
  password: string;
}

export const handlers = [
  // Auth endpoints
  http.post('/auth/login', async ({ request }) => {
    // const { email, password } = await request.json();
    // Use a type assertion to tell TypeScript the structure of the JSON body
  const { email, password } = (await request.json()) as LoginRequestBody;
  
    if (email === 'test@example.com' && password === 'password123') {
      return HttpResponse.json({
        access_token: 'mock-jwt-token',
        user: mockUser
      });
    }
    
    return new HttpResponse(null, { status: 401 });
  }),

  http.get('/auth/me', () => {
    return HttpResponse.json(mockUser);
  }),

  // Dashboard data endpoints
  http.get('/api/stats', () => {
    return HttpResponse.json({
      coursesEnrolled: 12,
      videosWatched: 48,
      doubtsResolved: 23,
      performance: 87
    });
  }),

  http.get('/api/activities', () => {
    return HttpResponse.json([
      { id: 1, action: 'Completed Physics Chapter', time: '2 hours ago', type: 'completion' },
      { id: 2, action: 'Submitted Math Assignment', time: '5 hours ago', type: 'submission' },
      { id: 3, action: 'Asked doubt in Chemistry', time: '1 day ago', type: 'doubt' },
      { id: 4, action: 'Watched Calculus video', time: '1 day ago', type: 'video' }
    ]);
  })
];