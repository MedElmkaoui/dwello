import { title } from "process";

export const landingPageData = {
    "header": {
      "logo": "/logo.png",
      "navigation": [
        "Home",
        "About",
        "Properties",
        "Pages",
        "Contact"
      ],
      "searchIcon": "/icon/search.png",
      "userIcon": "/icon/user.png",
      "signupBtn": "Sign up",
    },
    "hero": {
      "title": "Find Your Dream Home",
      "description" : 'Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision',
      "inputs": {
            "location": {
                "icon" : '/icon/location.png',
                "placeholder" : "Location",
            },
            "type": {
                "icon" : '/icon/home.png',
                "placeholder" : "Type",
            },
            "priceRange" : {
                "icon" : '/icon/coin.png',
                "placeholder" : "Price Range",
            },
        },
        "button": "Sign up",
        "image": "/image/hero.png"
    },
    "about" : {
        'image' : "/image/about.png",
        'title': "We Help You To Find Your Dream Home",
        "description" : "From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality",
        "statstics":[
            {
                "number" : "8K+",
                "label" : 'Houses Available'
            },
            {
                "number" : "6K+",
                "label" : 'Houses Sold'
            },
            {
                "number" : "2K+",
                "label" : 'Trusted Agents'
            },
        ]
    },
    "featuredProperties": {
      "title": "Featured Properties",
      "subtitle": "Handpicked properties by our team.",
      "properties": [
        {
          "image": "property1.jpg",
          "title": "Modern Family Home",
          "location": "123 Main St, Anytown",
          "price": "$350,000",
          "features": {
            "bedrooms": 3,
            "bathrooms": 2,
            "area": "2,500 sq ft"
          }
        },
        {
          "image": "property2.jpg",
          "title": "Luxury Apartment",
          "location": "456 High St, Metropolis",
          "price": "$500,000",
          "features": {
            "bedrooms": 2,
            "bathrooms": 2,
            "area": "1,800 sq ft"
          }
        },
        {
          "image": "property3.jpg",
          "title": "Cozy Cottage",
          "location": "789 Oak Rd, Smallville",
          "price": "$220,000",
          "features": {
            "bedrooms": 2,
            "bathrooms": 1,
            "area": "1,200 sq ft"
          }
        }
      ]
    },
    "whyChooseUs": {
      "title": "Why Choose Us",
      "subTitle" : "Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service",
      "reasons": [
        {
          "icon": "/icon/house.png",
          "title": "Wide Range of Properties",
          "description": "We offer a diverse selection of homes to suit every need and budget."
        },
        {
          "icon": "/icon/shield.png",
          "title": "Trusted by Thousands",
          "description": "Our proven track record of satisfied clients speaks for itself."
        },
        {
          "icon": "/icon/24-7.png",
          "title": "Financing Made Easy",
          "description": "We work with top lenders to get you the best rates and terms."
        },
        {
          "icon": "/icon/handshake.png",
          "title": "Expert Agents",
          "description": "Our experienced team guides you through every step of the process."
        }
      ]
    },
    "popular" : {
        'title' : 'Our Popular Residences',
        "residences" : [
            {
                'image' : '/image/r01.png',
                'location' : 'San Francisco, California',
                'rooms' : '4',
                'eria' : "3.500",
                'price' : '$2,500,000'
            },
            {
                'image' : '/image/r02.png',
                'location' : 'Beverly Hills, California',
                'rooms' : '3',
                'eria' : "1.500",
                'price' : '$850,000'
            },
            {
                'image' : '/image/r03.png',
                'location' : 'Palo Alto, California',
                'rooms' : '6',
                'eria' : "4.000",
                'price' : '$3,700,000'
            },
        ]
    },
    "topAgents": {
      "title": "Top Agents",
      "agents": [
        {
          "image": "agent1.jpg",
          "name": "John Smith",
          "title": "Senior Agent",
          "contact": "+1 234 567 890"
        },
        {
          "image": "agent2.jpg",
          "name": "Jane Doe",
          "title": "Luxury Property Specialist",
          "contact": "+1 234 567 891"
        },
        {
          "image": "agent3.jpg",
          "name": "Mike Johnson",
          "title": "Commercial Expert",
          "contact": "+1 234 567 892"
        }
      ]
    },
    "recentProperties": {
      "title": "Most Recent Properties",
      "properties": [
        {
          "image": "recent1.jpg",
          "title": "Suburban Family House",
          "location": "Suburb, City",
          "price": "$450,000",
          "features": {
            "bedrooms": 4,
            "bathrooms": 3,
            "area": "3,000 sq ft"
          }
        },
        {
          "image": "recent2.jpg",
          "title": "Downtown Loft",
          "location": "City Center",
          "price": "$300,000",
          "features": {
            "bedrooms": 1,
            "bathrooms": 1,
            "area": "1,000 sq ft"
          }
        }
      ]
    },
    "testimonials": {
      "title": "What People Are Saying",
      "quotes": [
        {
          "text": "Housy made finding our dream home a breeze. Highly recommended!",
          "author": "Sarah & Tom K."
        },
        {
          "text": "Professional service from start to finish. We couldn't be happier.",
          "author": "The Johnson Family"
        }
      ]
    },
    "callToAction": {
      "title": "Are You Ready for a Home?",
      "subtitle": "Let's get started now!",
      "button": "Contact Us"
    },
    "footer": {
      "logo": "Housy",
      "description": "Find your perfect property with Housy. We make home-buying and selling simple and stress-free.",
      "sections": [
        {
          "title": "Quick Links",
          "links": ["About Us", "Our Agents", "Properties", "Contact"]
        },
        {
          "title": "Services",
          "links": ["Buy a Home", "Sell a Home", "Rent a Home", "Real Estate Investments"]
        },
        {
          "title": "Contact Info",
          "info": [
            "123 Real Estate Street, Anytown, ST 12345",
            "info@housy.com",
            "+1 (555) 123-4567"
          ]
        }
      ],
      "copyright": "© 2024 Housy. All rights reserved."
    }
  }