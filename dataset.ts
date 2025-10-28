/**
 * techEventsData.js
 * * Dataset for the Crowdsourced Local Tech Event Finder App.
 * Fields support core features: Interactive Map, Date/Type/Role Filters,
 * and Volunteer Matching.
 */

const techEventsData = [
  {
    event_id: 101,
    title: "DevFest Manila 2025",
    organizer: "GDG Manila",
    start_date: "2025-11-14T09:00:00", // Using ISO format for easy Date object creation
    end_date: "2025-11-15T17:00:00",
    type: ["Conference", "Workshop"],
    location_name: "Accenture People Hub",
    city: "Taguig City",
    latitude: 14.5458,
    longitude: 121.0506,
    volunteer_roles_needed: ["Logistics", "Registration", "Technical Support"],
    skill_tags: ["Generative AI", "Cloud", "Modern Dev Stacks", "Mobile Dev"],
    distance_km: 4.5 // Placeholder for distance (to be calculated dynamically by the app)
  },
  {
    event_id: 102,
    title: "CodeKada: Innovation Hackathon",
    organizer: "DevKada",
    start_date: "2025-11-08T10:00:00",
    end_date: "2025-11-08T18:00:00",
    type: ["Hackathon", "Meetup"],
    location_name: "KMC Solutions, V Corporate Center",
    city: "Makati City",
    latitude: 14.5574,
    longitude: 121.0245,
    volunteer_roles_needed: ["Judge Coordinator", "Logistics", "Photography"],
    skill_tags: ["AI", "Software Development", "Live Coding", "Team Lead"],
    distance_km: 2.1
  },
  {
    event_id: 103,
    title: "Test Automation Summit | Manila",
    organizer: "Tech Events PH",
    start_date: "2025-11-21T09:00:00",
    end_date: "2025-11-21T17:00:00",
    type: ["Summit", "Workshop"],
    location_name: "Seda BGC",
    city: "Taguig City",
    latitude: 14.5501,
    longitude: 121.0506,
    volunteer_roles_needed: ["A/V Setup", "Registration", "Ushering"],
    skill_tags: ["QA/Testing", "DevOps", "Automation", "Software Engineering"],
    distance_km: 3.9
  },
  {
    event_id: 104,
    title: "Meet Magento PH 2025",
    organizer: "Adobe/Magento PH",
    start_date: "2025-11-19T08:00:00",
    end_date: "2025-11-19T18:00:00",
    type: ["Conference"],
    location_name: "The Blue Leaf Events Pavilion",
    city: "Taguig City",
    latitude: 14.5367,
    longitude: 121.0494,
    volunteer_roles_needed: ["Registration", "Speaker Support", "Photography"],
    skill_tags: ["E-Commerce", "Web Dev", "Cloud", "Fintech"],
    distance_km: 5.0
  },
  {
    event_id: 105,
    title: "AI & Tech Manila: Chill & Chat",
    organizer: "AI Community Manila",
    start_date: "2025-11-01T14:00:00",
    end_date: "2025-11-01T17:00:00",
    type: ["Meetup"],
    location_name: "Cafe Shylo",
    city: "Pasig City",
    latitude: 14.5960,
    longitude: 121.0734,
    volunteer_roles_needed: ["Logistics (Venue Prep)"],
    skill_tags: ["AI/ML", "Data Science", "Networking", "Startup"],
    distance_km: 8.7
  },
  {
    event_id: 106,
    title: "Digital Nation Summit Manila",
    organizer: "Digital Nation PH",
    start_date: "2025-11-13T09:00:00",
    end_date: "2025-11-13T18:00:00",
    type: ["Summit", "Conference"],
    location_name: "Makati Shangri-La",
    city: "Makati City",
    latitude: 14.5570,
    longitude: 121.0250,
    volunteer_roles_needed: ["Registration", "Media Relations", "Technical Support"],
    skill_tags: ["IT & Technology", "Digital Economy", "Strategy", "Policy"],
    distance_km: 2.3
  },
  {
    event_id: 107,
    title: "PMAX 2025 Expo",
    organizer: "PMAX Organizers",
    start_date: "2025-12-03T10:00:00",
    end_date: "2025-12-05T18:00:00",
    type: ["Fair/Expo", "Conference"],
    location_name: "SMX Convention Center",
    city: "Pasay City",
    latitude: 14.5362,
    longitude: 121.0069,
    volunteer_roles_needed: ["Logistics", "Exhibitor Support"],
    skill_tags: ["Manufacturing", "Automation", "IoT", "Industry 4.0"],
    distance_km: 6.9
  },
  {
    event_id: 108,
    title: "Globe DevCon 2025",
    organizer: "Globe Telecom",
    start_date: "2025-10-09T08:00:00",
    end_date: "2025-10-09T18:00:00",
    type: ["Conference", "DevCon"],
    location_name: "The Globe Tower",
    city: "Taguig City",
    latitude: 14.5401,
    longitude: 121.0494,
    volunteer_roles_needed: ["Registration", "Ushering", "Technical Support"],
    skill_tags: ["AI", "Cloud", "API Development", "Telco Tech"],
    distance_km: 4.8
  },
  {
    event_id: 109,
    title: "FinTech Innovation Forum",
    organizer: "FinTech Alliance PH",
    start_date: "2025-10-28T09:00:00",
    end_date: "2025-10-28T17:00:00",
    type: ["Forum", "Networking"],
    location_name: "Ayala Bay Area Offices",
    city: "Pasay City",
    latitude: 14.5315,
    longitude: 120.9834,
    volunteer_roles_needed: ["Registration", "Speaker Support", "Audience Engagement"],
    skill_tags: ["FinTech", "Blockchain", "Digital Banking", "Regulation"],
    distance_km: 7.5
  },
  {
    event_id: 110,
    title: "GDSC Solutions Challenge Workshop",
    organizer: "Google Developer Student Clubs (various)",
    start_date: "2025-11-02T13:00:00",
    end_date: "2025-11-02T17:00:00",
    type: ["Workshop", "Mentorship"],
    location_name: "UP Diliman Campus - College of Eng'g",
    city: "Quezon City",
    latitude: 14.6534,
    longitude: 121.0682,
    volunteer_roles_needed: ["Mentor Assistant", "Logistics", "Technical Setup"],
    skill_tags: ["Problem Solving", "Full-Stack Dev", "Mobile Dev", "Cloud", "UI/UX Design"],
    distance_km: 12.0
  }
];

export default techEventsData;