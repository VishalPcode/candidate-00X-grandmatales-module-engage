import { useState } from 'react';

export default function Engage() {
  const [formData, setFormData] = useState({
    story: '',
    prize: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Simulating form POST:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        backgroundColor: '#FAF9F7',
        color: '#4B2E39',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div
        className="max-w-xl w-full rounded-xl shadow-md border animate-fade-in"
        style={{
          backgroundColor: 'white',
          borderColor: '#D4AF37',
          padding: '2rem'
        }}
      >
        <h1
          className="text-3xl sm:text-4xl mb-6 text-center font-bold lowercase"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          we’d love your feedback!
        </h1>

        {submitted ? (
          <p className="text-lg text-center text-green-600 font-semibold">Thank you for sharing! 💛</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="story" className="block mb-2 text-lg font-semibold">
                My favourite bedtime story is…
              </label>
              <input
                required
                name="story"
                id="story"
                value={formData.story}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border"
                style={{
                  borderColor: '#4B2E39',
                  color: '#4B2E39'
                }}
                placeholder="Enter your favorite story"
              />
            </div>

            <div>
              <label htmlFor="prize" className="block mb-2 text-lg font-semibold">
                Suggest a prize you’d love to win
              </label>
              <input
                required
                name="prize"
                id="prize"
                value={formData.prize}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border"
                style={{
                  borderColor: '#4B2E39',
                  color: '#4B2E39'
                }}
                placeholder="Enter your dream prize"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 font-semibold transition rounded-lg"
              style={{
                backgroundColor: '#D4AF37',
                color: '#4B2E39'
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
