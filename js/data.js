/**
 * NJNFC Official Data Store
 * Contains all structured data for Tournaments, Leagues, Teams, Fields, Sponsors, Gallery & FAQs
 */

const NJNFC_DATA = {
  organization: {
    name: "NJNFC (New Jersey Nepali Football Club)",
    shortName: "NJNFC",
    tagline: "Uniting Community, Inspiring Youth, Celebrating Heritage Through Soccer",
    mission: "Our mission is to unite and empower the Nepali community in New Jersey through the shared passion for soccer, while creating a welcoming environment for individuals from all backgrounds. What began as a simple way to stay active and connected has grown into a meaningful movement to promote physical wellness, cultural pride, and lasting community bonds.",
    belief: "We believe that soccer is more than just a game—it is a powerful tool to bring people together, foster understanding, and create positive change. Through organized pickup games, youth outreach, community events, and friendly tournaments, we aim to inspire the next generation, strengthen ties within our community, and promote the values of respect, teamwork, and sportsmanship.",
    contactEmail: "nepalicommunitynj@njnfc.org",
    founded: "2024",
    status: "Non-Profit Community & Sports Organization",
    locationsCount: "2 Premier Fields in NJ",
    membersCount: "250+ Active Players",
    tournamentsCount: "12+ Tournaments & Leagues Hosted"
  },

  stats: [
    { number: "250+", label: "Active Players", icon: "users" },
    { number: "12+", label: "Leagues & Cups Hosted", icon: "trophy" },
    { number: "2", label: "NJ Home Fields", icon: "map-pin" },
    { number: "100%", label: "Volunteer-Driven Non-Profit", icon: "heart-handshake" }
  ],

  pillars: [
    {
      id: "youth",
      title: "Youth Mentorship & Future Stars",
      icon: "graduation-cap",
      desc: "Nurturing the next generation through structured skills clinics, mentorship from veteran players, and instilling leadership and discipline."
    },
    {
      id: "cultural",
      title: "Nepali Heritage & Cultural Unity",
      icon: "flag",
      desc: "Celebrating Nepali festivals, post-match community BBQs, and fostering warm connections for families and newcomers across the Tri-State area."
    },
    {
      id: "wellness",
      title: "Physical Wellness & Active Living",
      icon: "activity",
      desc: "Regular weekend pickup sessions and seasonal leagues that provide a healthy, high-energy outlet for players of all skill levels."
    },
    {
      id: "fairplay",
      title: "Clean Play & Respect",
      icon: "shield-check",
      desc: "Championing sportsmanship, mutual respect on and off the pitch, and creating an inclusive, positive atmosphere for all backgrounds."
    }
  ],

  leagues: {
    spring2025: {
      name: "NJNFC Spring League 2025",
      dates: "April 5 to May 31, 2025",
      status: "Active / Upcoming Season",
      teams: [
        {
          id: "alpha",
          name: "Team ALPHA",
          captain: "Abiral",
          badgeColor: "#E63946",
          players: ["Abiral (C)", "Lolo", "Navin", "Rabin", "Ruffin", "Sanjiv", "Shams", "Sushil"],
          stats: { played: 6, won: 4, drawn: 1, lost: 1, gf: 14, ga: 8, pts: 13 }
        },
        {
          id: "bravo",
          name: "Team BRAVO",
          captain: "Dinesh",
          badgeColor: "#2563EB",
          players: ["Dinesh (C)", "Dipendra", "Sabin", "Sandeep", "Sanjay", "Sanjeev", "Suresh"],
          stats: { played: 6, won: 3, drawn: 2, lost: 1, gf: 11, ga: 7, pts: 11 }
        },
        {
          id: "charlie",
          name: "Team CHARLIE",
          captain: "Bimal",
          badgeColor: "#F59E0B",
          players: ["Bimal (C)", "Binod", "Biraj", "Bishnu", "Danny", "Gaurav", "Manoj", "Ojal"],
          stats: { played: 6, won: 5, drawn: 0, lost: 1, gf: 16, ga: 6, pts: 15 }
        },
        {
          id: "delta",
          name: "Team DELTA",
          captain: "Anil",
          badgeColor: "#10B981",
          players: ["Anil (C)", "Dil", "Jeff", "Junior", "Rahul", "Ram", "Sudan", "Uchit"],
          stats: { played: 6, won: 2, drawn: 1, lost: 3, gf: 9, ga: 12, pts: 7 }
        }
      ],
      upcomingFixtures: [
        { date: "Saturday, April 5", time: "8:00 AM", home: "Team ALPHA", away: "Team BRAVO", venue: "Oak Ridge Park" },
        { date: "Saturday, April 5", time: "9:30 AM", home: "Team CHARLIE", away: "Team DELTA", venue: "Oak Ridge Park" },
        { date: "Saturday, April 12", time: "8:00 AM", home: "Team ALPHA", away: "Team CHARLIE", venue: "Ponderosa Farm Park" },
        { date: "Saturday, April 12", time: "9:30 AM", home: "Team BRAVO", away: "Team DELTA", venue: "Ponderosa Farm Park" }
      ]
    },

    fallChampionship: {
      name: "NJNFC Fall Championship Series",
      dates: "September Annual Tournament",
      status: "Premier Annual Event",
      teams: [
        {
          id: "fire",
          name: "Team FIRE",
          captain: "Sabin",
          badgeColor: "#DC2626",
          players: ["Sabin (C)", "Abira", "Akash", "Hari", "Manoj", "Prachanda", "Sameer", "Sanjay"]
        },
        {
          id: "electric-egg",
          name: "Team ELECTRIC EGG",
          captain: "Sanjeev",
          badgeColor: "#EAB308",
          players: ["Sanjeev (C)", "Aashis", "Abhinav", "Binod", "Dinesh", "Dipendra", "Jaime", "Ruffin"]
        },
        {
          id: "bajra",
          name: "Team BAJRA",
          captain: "Bimal",
          badgeColor: "#0284C7",
          players: ["Bimal (C)", "Aayush", "Ankit", "Biraj", "Bishnu", "Jacq", "Pratik", "Sanj"]
        },
        {
          id: "sea",
          name: "Team SEA",
          captain: "Rahul",
          badgeColor: "#06B6D4",
          players: ["Rahul (C)", "Binay", "Danny", "Rabin", "Rajan", "Rohit", "Sanjiv", "Shareen"]
        },
        {
          id: "yomari",
          name: "Team YOMARI",
          captain: "Anil",
          badgeColor: "#8B5CF6",
          players: ["Anil (C)", "Ashok", "Gaurav", "Junior", "Navin", "Ram", "Sompe", "Uchit"]
        },
        {
          id: "dalle-khursani",
          name: "Team DALLE KHURSANI",
          captain: "Lolo",
          badgeColor: "#F97316",
          players: ["Lolo (C)", "Bipin", "Dil", "Lok", "Sandeep", "Shams", "Sudan", "Suresh"]
        }
      ]
    }
  },

  hallOfFame: [
    {
      tournament: "NJNFC Champions League & Fall Classic 2024",
      champions: "Team Charlie",
      mvp: "Bishnu Gurung & Rahul Rauniyar",
      topScorer: "Bimal (Team Charlie)",
      roster: "Bimal, Ashok, Biraj, Bishnu, Dil, Manoj, Pratik, Ram",
      highlight: "Decisive penalty shoot-out victory and celebrated with trophy hoisting & community BBQ!"
    },
    {
      tournament: "NJNFC Summer Soccer Tournament 2024",
      champions: "Team 4",
      mvp: "Dil KC",
      topScorer: "Herve & Shams",
      roster: "Anil, Bishnu, Dinesh, Herve, Prachanda, Rohit, Sanjeev, Shams",
      highlight: "Undefeated group stage run with clinical counter-attacks and rock-solid defense."
    },
    {
      tournament: "Tri-State Invitational (Philly Cup 2025)",
      champions: "NJNFC All-Stars Representation",
      mvp: "Team Effort",
      topScorer: "Community Selection",
      roster: "Selected NJNFC Premier Squad",
      highlight: "Representing New Jersey Nepali Football Club with distinction in Pennsylvania."
    }
  ],

  fields: [
    {
      id: "oakridge",
      name: "Oak Ridge Park Athletic Complex",
      address: "136 Oak Ridge Rd, Clark, NJ 07066",
      surface: "All-Weather Synthetic Turf (State-of-the-art)",
      rating: "5.0 ★★★★★ Sports Complex",
      pickupSchedule: "Saturdays & Sundays (7:30 AM - 10:30 AM)",
      amenities: ["Floodlit Turf Pitch", "Field House Restrooms", "Ample Free Parking", "Spectator Bleachers", "Water Stations"],
      mapUrl: "https://maps.app.goo.gl/KKdVtjezfXb6H8Hf6",
      embedCoordinates: { lat: 40.6128, lng: -74.3218 },
      tag: "Primary Match Ground"
    },
    {
      id: "ponderosa",
      name: "Ponderosa Farm Park",
      address: "1600 Cooper Rd, Scotch Plains, NJ 07076",
      surface: "Pristine Natural Grass & Turf Fields",
      rating: "5.0 ★★★★★ Park Facility",
      pickupSchedule: "Weekday Evenings & Sunday Scrimmages (8:00 AM - 11:00 AM)",
      amenities: ["Lush Grass Field", "Community Pavilion & BBQ Area", "Children's Playground", "Walking Trails", "Restrooms"],
      mapUrl: "https://maps.app.goo.gl/ziDPUPnkRWhMyWYq5",
      embedCoordinates: { lat: 40.6198, lng: -74.3672 },
      tag: "Community Pickup & BBQ Ground"
    }
  ],

  gallery: [
    {
      title: "2024 Fall Tournament Winners",
      category: "Tournaments",
      subtitle: "Champions Hoisting the Cup at Ponderosa Park",
      image: "assets/images/real/tournament-winners-cup.jpg"
    },
    {
      title: "Champions League 2024 Squad",
      category: "Matches",
      subtitle: "Official Team Photo in Mountain Red & Blue Kits",
      image: "assets/images/real/champions-league-2024.jpg"
    },
    {
      title: "First MVP of the Tournament",
      category: "Tournaments",
      subtitle: "Golden Ball Trophy & Medal Presentation (Fall 2024)",
      image: "assets/images/real/mvp-golden-ball-trophy.jpg"
    },
    {
      title: "Tournament Cup & Medals",
      category: "Tournaments",
      subtitle: "Official Championship Cup, Medals & Position Draft",
      image: "assets/images/real/cup-medals-draft.jpg"
    },
    {
      title: "Our Dedicated BBQ Chefs",
      category: "Community",
      subtitle: "Master chefs grilling fresh BBQ at community tournament",
      image: "assets/images/real/bbq-chefs.jpg"
    },
    {
      title: "Veggie BBQ & Fresh Spices",
      category: "Community",
      subtitle: "Delicious vegetarian barbecue prepared for players & guests",
      image: "assets/images/real/veggie-bbq-chef.jpg"
    },
    {
      title: "Weekend Scrimmage Refreshments",
      category: "Community",
      subtitle: "Post-match camaraderie, drinks, and fellowship",
      image: "assets/images/real/post-game-refreshment.jpg"
    },
    {
      title: "Soccer Tournament & BBQ 2024 Flyer",
      category: "Tournaments",
      subtitle: "Official event flyer from September 22, 2024",
      image: "assets/images/real/tournament-bbq-flyer-2024.jpg"
    }
  ],

  sponsors: [
    {
      name: "Aganja Kitchen",
      category: "Culinary & Dining Partner",
      website: "https://aganjakitchen.com/",
      description: "Authentic Himalayan cuisine, elevating community gatherings and post-tournament celebrations.",
      logo: "assets/images/real/sponsor-aganja-kitchen.png",
      badge: "Premier Partner"
    },
    {
      name: "Spice House",
      category: "Restaurant & Hospitality Sponsor",
      website: "https://www.spicehousenj.com/",
      description: "Exquisite South Asian flavors supporting local athletics, player refreshments, and tournament events.",
      logo: "assets/images/real/sponsor-spice-house.png",
      badge: "Gold Sponsor"
    },
    {
      name: "Moksha Eats",
      category: "Community Partner",
      website: "https://www.njnfc.org/events",
      description: "Authentic flavors and vibrant culinary support for NJNFC soccer leagues and special tournaments.",
      logo: "assets/images/real/sponsor-moksha-eats.png",
      badge: "Community Sponsor"
    },
    {
      name: "William Street Podiatry Care",
      category: "Sports Medicine & Foot Health",
      website: "https://williamstreetpodiatry.com",
      description: "NYC & NJ's trusted foot & ankle specialists keeping our players conditioned, injury-free, and game-ready.",
      logo: null,
      badge: "Official Health Partner"
    }
  ],

  donationTiers: [
    {
      amount: 25,
      title: "Youth Equipment Supporter",
      impact: "Provides official soccer balls, training bibs, and agility cones for youth clinic sessions."
    },
    {
      amount: 50,
      title: "Matchday Gear Sponsor",
      impact: "Funds referee allowances, first aid safety kits, and field water hydration stations."
    },
    {
      amount: 100,
      title: "Field Permit Benefactor",
      impact: "Helps cover township field rental permits at Oak Ridge & Ponderosa parks for weekend leagues."
    },
    {
      amount: 250,
      title: "Championship Trophy & MVP Patron",
      impact: "Funds tournament cups, player medals, MVP trophies, and community celebration refreshments."
    }
  ],

  faqs: [
    {
      q: "Who can join NJNFC soccer sessions and tournaments?",
      a: "Everyone! While NJNFC was founded by Nepali soccer lovers in New Jersey, we are open to players of all skill levels, ages, and backgrounds who share a passion for fair play, teamwork, and positive community spirit."
    },
    {
      q: "How do regular weekend pickup games work?",
      a: "We host regular pickup games on weekend mornings (typically Saturday and Sunday between 7:30 AM and 11:00 AM) at Oak Ridge Park in Clark, NJ and Ponderosa Farm Park in Scotch Plains, NJ. Simply bring your cleats, shinguards, and positive energy!"
    },
    {
      q: "How are tournament teams formed?",
      a: "Before each seasonal league (like our Spring League or Fall Championship), we conduct open registrations. Players can sign up as individual free agents (who get drafted to balanced teams) or submit captain-led team entries."
    },
    {
      q: "How are donations used?",
      a: "As a non-profit community sports organization, 100% of donations and sponsorships directly fund township field rental permits, youth training clinics, referee stipends, team equipment, and community family BBQs."
    },
    {
      q: "How can businesses sponsor NJNFC?",
      a: "Businesses can sponsor individual tournaments, have their brand featured on team jerseys, event banners, and digital platforms. Contact us at nepalicommunitynj@njnfc.org or click 'Become a Sponsor' to connect with our organizing committee."
    }
  ]
};
