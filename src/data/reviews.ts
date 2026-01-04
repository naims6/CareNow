// src/data/reviews.ts
export type TestimonialType = {
  name: string;
  role: string;
  image: string;
  quote: string;
  service: "Baby Care" | "Elderly Care" | "Special Care";
};

export const testimonials: TestimonialType[] = [
  {
    name: "Ayesha Rahman",
    role: "Working Mother",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "As a working mother in Dhaka, finding reliable childcare was my biggest worry. Care.IO connected me with an amazing caregiver who genuinely loves my 2-year-old daughter. The background verification gave me complete peace of mind.",
    service: "Baby Care",
  },
  {
    name: "Mr. Kabir Ahmed",
    role: "Son of Elderly Patient",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "My 78-year-old father needed post-stroke care, and we struggled to find someone reliable in Chittagong. The caregiver from Care.IO was not only professional but treated my father with such dignity and compassion. Highly recommended!",
    service: "Elderly Care",
  },
  {
    name: "Fatima Begum",
    role: "Daughter",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    quote:
      "After my mother's knee replacement surgery in Sylhet, we needed specialized care. The caregiver was trained in physiotherapy and helped with recovery exercises daily. Mom is walking independently now! Thank you Care.IO.",
    service: "Special Care",
  },
  {
    name: "Rahim Uddin",
    role: "Father of Twins",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "With twin babies, we needed overnight care support. The caregivers from Care.IO were professional, punctual, and handled everything perfectly. We finally got some proper sleep after months!",
    service: "Baby Care",
  },
  {
    name: "Nusrat Jahan",
    role: "Daughter-in-law",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "My mother-in-law has dementia, and we needed someone patient and understanding in Dhaka. The caregiver from Care.IO has been a blessing for our entire family. She knows exactly how to handle difficult situations.",
    service: "Elderly Care",
  },
  {
    name: "Dr. Tanvir Hossain",
    role: "Medical Doctor",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "As a doctor, I recommend Care.IO to my patients needing post-hospitalization care. The caregivers are properly trained, follow medical instructions accurately, and provide compassionate support.",
    service: "Special Care",
  },
  {
    name: "Sharmin Akter",
    role: "Banker",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      "Being a single mother with irregular banking hours, Care.IO has been a lifesaver. I can book caregivers on short notice, and they always arrive on time. My 4-year-old son loves his caregiver!",
    service: "Baby Care",
  },
  {
    name: "Mr. Abdul Malek",
    role: "Retired Professor",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "At 82, I needed daily assistance but wanted to maintain my independence. My caregiver from Care.IO helps with medication, cooking, and even reads the newspaper with me. It's like having family around.",
    service: "Elderly Care",
  },
  {
    name: "Sadia Islam",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    quote:
      "My father has Parkinson's disease and needs specialized care. The caregiver from Care.IO is trained in mobility assistance and knows exactly how to help him. We've seen significant improvement in his daily life.",
    service: "Special Care",
  },
  {
    name: "Minhaj Uddin",
    role: "Corporate Executive",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "We needed a nanny for our newborn while my wife returned to work. The caregiver was experienced with infants, followed feeding schedules perfectly, and sent regular updates throughout the day.",
    service: "Baby Care",
  },
  {
    name: "Mrs. Ferdousi Begum",
    role: "Housewife",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "My husband needed 24/7 care after his heart surgery. Care.IO provided round-the-clock caregivers who were not only skilled but also became like family to us during this difficult time.",
    service: "Elderly Care",
  },
  {
    name: "Tasnim Ahmed",
    role: "University Student",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    quote:
      "My younger brother has special needs and requires constant attention. The caregivers from Care.IO are specially trained and understand how to engage with him. It has given our family much-needed respite.",
    service: "Special Care",
  },
  {
    name: "Farhana Yeasmin",
    role: "School Teacher",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    quote:
      "During exam season, I needed extra help with my 3 children. The caregiver helped with homework, meals, and bedtime routines. She even taught my kids some educational games. Excellent service!",
    service: "Baby Care",
  },
  {
    name: "Dr. Sultana Rahman",
    role: "Geriatric Specialist",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "I frequently refer my elderly patients to Care.IO. Their caregivers understand geriatric care requirements, medication management, and provide the emotional support that elderly people need.",
    service: "Elderly Care",
  },
  {
    name: "Arif Hassan",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    quote:
      "My mother needed post-chemotherapy care. The caregiver was knowledgeable about side effects, helped with nutrition, and provided emotional support. Made her recovery journey much smoother.",
    service: "Special Care",
  },
  {
    name: "Nasrin Sultana",
    role: "Nurse",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    quote:
      "As a nurse working night shifts, I needed reliable childcare. Care.IO caregivers are trained in basic first aid and emergency response, which gave me extra confidence in their capabilities.",
    service: "Baby Care",
  },
  {
    name: "Mr. Golam Mostafa",
    role: "Retired Government Officer",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "At 85, I live alone but needed help with daily tasks. My caregiver from Care.IO not only helps with household chores but also provides companionship. We discuss politics and watch cricket together!",
    service: "Elderly Care",
  },
  {
    name: "Shirin Akhter",
    role: "Daughter",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote:
      "My brother has autism and needs structured care. The specialized caregiver from Care.IO follows his routine perfectly and uses communication techniques that work best for him. Life-changing service.",
    service: "Special Care",
  },
  {
    name: "Rafiqul Islam",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "With both parents needing elderly care, Care.IO provided two caregivers who work in shifts. The coordination between them is seamless, and my parents receive consistent, high-quality care.",
    service: "Elderly Care",
  },
  {
    name: "Tahmina Chowdhury",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    quote:
      "I needed emergency childcare when our regular help fell sick. Care.IO arranged a caregiver within 2 hours! She was professional, experienced, and my children loved her. Lifesaver service!",
    service: "Baby Care",
  },
  {
    name: "Mr. Kabir Ahmed",
    role: "Son of Elderly Patient",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "My 78-year-old father needed post-stroke care, and we struggled to find someone reliable in Chittagong. The caregiver from Care.IO was not only professional but treated my father with such dignity and compassion. Highly recommended!",
    service: "Elderly Care",
  },
];
