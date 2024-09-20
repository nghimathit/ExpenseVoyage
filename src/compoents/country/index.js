const country = [
  { name: "Viet Nam", url: "https://images.unsplash.com/photo-1603852452440-b383ac720729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGglRTElQkIlOTMlMjBjaCVDMyVBRCUyMG1pbmglMjBjaXR5fGVufDB8fDB8fHww" },
  { name: "United States", url: "https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdGVkJTIwc3RhdGVzfGVufDB8fDB8fHww" },
  { name: "Canada", url: "https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FuYWRhfGVufDB8fDB8fHww" },
  { name: "Australia", url: "https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D"},
  { name: "Japan", url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFwYW58ZW58MHx8MHx8fDA%3D" },
  { name: "South Korea", url: "https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U291dGglMjBLb3JlYSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" },
  { name: "France", url: "https://plus.unsplash.com/premium_photo-1694475374910-bc597c74b738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJhbmNlJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Germany", url: "https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R2VybWFueSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" },
  { name: "Italy", url: "https://images.unsplash.com/photo-1673911673282-fd679c365356?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SXRhbHklMjBjaXR5fGVufDB8fDB8fHww" },
  { name: "United Kingdom", url: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VW5pdGVkJTIwS2luZ2RvbSUyMGNpdHl8ZW58MHx8MHx8fDA%3D" },
  { name: "Brazil", url: "https://images.unsplash.com/photo-1483324084333-5c7a74cac8b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJyYXppbHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Mexico", url: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWV4aWNvfGVufDB8fDB8fHww" },
  { name: "India", ur: "https://images.unsplash.com/photo-1532664189809-02133fee698d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "China", url: "https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D" },
  { name: "Russia", url: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVzc2lhfGVufDB8fDB8fHww" },
  { name: "Spain", url: "https://plus.unsplash.com/premium_photo-1700566982560-31ed8b46991a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BhaW58ZW58MHx8MHx8fDA%3D" },
  { name: "Argentina", url: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJnZW50aW5hfGVufDB8fDB8fHww" },
  { name: "South Africa", url: "https://images.unsplash.com/photo-1529528070131-eda9f3e90919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U291dGglMjBBZnJpY2F8ZW58MHx8MHx8fDA%3D" },
  { name: "Egypt", url: "https://plus.unsplash.com/premium_photo-1661962355663-2a435ccf844d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWd5cHR8ZW58MHx8MHx8fDA%3D" },
  { name: "New Zealand", url: "https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5ldyUyMFplYWxhbmR8ZW58MHx8MHx8fDA%3D" },
];

export default country;
