export const navItems = [
  { id: 'dashboard', title: 'Dashboard', icon: 'Layout' },
  { id: 'history', title: 'History', icon: 'Clock' },
  { id: 'calendar', title: 'Calendar', icon: 'Calendar' },
  { id: 'appointments', title: 'Appointments', icon: 'CalendarClock' },
  { id: 'statistics', title: 'Statistics', icon: 'BarChart2' },
  { id: 'chat', title: 'Chat', icon: 'MessageSquare' },
  { id: 'support', title: 'Support', icon: 'LifeBuoy' },
  { id: 'setting', title: 'Setting', icon: 'Settings' },
];

export const healthIndicators = [
  { id: 'heart', label: 'Healthy Heart', position: { top: '32%', left: '50%' }, status: 'healthy' },
  { id: 'lungs', label: 'Lungs', position: { top: '38%', left: '45%' }, status: 'warning' },
  { id: 'teeth', label: 'Teeth', position: { top: '18%', left: '50%' }, status: 'warning' },
  { id: 'bone', label: 'Bone', position: { top: '60%', left: '30%' }, status: 'healthy' },
];

export const healthCards = [
  { id: 'lungs', title: 'Lungs', date: '23 Sep 2021', status: 'warning' },
  { id: 'teeth', title: 'Teeth', date: '15 Oct 2021', status: 'critical' },
  { id: 'bone', title: 'Bone', date: '02 Oct 2021', status: 'healthy' },
  { id: 'heart', title: 'Heart', date: '05 Oct 2021', status: 'healthy' },
];

export const calendarDays = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  appointments: []
}));

// Add some appointments to specific days
calendarDays[4].appointments = [{ time: '09:00', title: 'Dentist' }];
calendarDays[10].appointments = [{ time: '11:00', title: 'Check-up' }];
calendarDays[15].appointments = [{ time: '13:00', title: 'Cardiologist' }];
calendarDays[22].appointments = [{ time: '15:00', title: 'Physiotherapy' }];

export const calendarAppointments = [
  { id: 'app1', title: 'Cardiologist', doctor: 'Dr. Cameron Williamson', time: '11:00', day: 'Monday', date: '5 May 2025' },
  { id: 'app2', title: 'Dentist', doctor: 'Dr. Cameron Williamson', time: '14:00', day: 'Monday', date: '5 May 2025' },
  { id: 'app3', title: 'Physiotherapy', doctor: 'Dr. Cameron Williamson', time: '11:00', day: 'Wednesday', date: '7 May 2025' },
];

export const upcomingSchedule = [
  {
    day: 'Thursday',
    appointments: [
      { id: 'app3', title: 'General Check-Up', doctor: 'Dr. Williams', time: '11:00 AM', day: 'Thursday', status: 'completed' },
      { id: 'app4', title: 'Ophthalmologist', doctor: 'Dr. Brown', time: '14:00 PM', day: 'Thursday', type: 'specialist' },
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { id: 'app5', title: 'Cardiologist', doctor: 'Dr. Williams', time: '12:00 AM', day: 'Saturday', type: 'specialist' },
      { id: 'app6', title: 'Neurologist', doctor: 'Dr. Green', time: '16:00 PM', day: 'Saturday', type: 'specialist' },
    ]
  }
];

export const activityData = {
  count: 3,
  period: 'this week',
  data: [2, 3, 5, 3, 1, 4, 2]
};