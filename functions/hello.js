require('dotenv').config();
const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

exports.handler = async function(event, context) {
  const { data, error } = await supabase
  .from('todos')
  .insert([
      { description: 'Todo genesis' },
  ]);
  console.log(data, error);
  return {
    statusCode:200,
    body: JSON.stringify({message:"Welcome to cloud functions","dburl":DATABASE_URL,"apikey":SUPABASE_SERVICE_API_KEY})
  }
}