// 4 kyu **
// Objectify a URL Query String

// In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

// You will receive a string input that looks something like this:

// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
// Your method should return an object hash-map that looks like this:

// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }

// Converts a URL Query String into an object map
function parseQueryString(query) {
    if (!query) return {}; // Handle empty query string

    const result = {};
  
    // Split the query string by '&' to get individual key-value pairs
    const pairs = query.split('&');
  
    pairs.forEach(pair => {
      // Decode each pair to handle URL encoding (e.g., spaces, special characters)
      const [key, value] = pair.split('=').map(decodeURIComponent);
      const keys = key.split('.'); // Split the key by '.' to get nested keys
  
      // Build the nested object structure
      let current = result;
      keys.forEach((k, index) => {
        if (index === keys.length - 1) {
          // Assign the value if it's the last key in the chain
          current[k] = value;
        } else {
          // If the key doesn't exist, create an empty object
          current[k] = current[k] || {};
          current = current[k]; // Move to the next level in the nested structure
        }
      });
    });
  
    return result;
  }
  
  // Example usage:
  const query = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
  console.log(parseQueryString(query));