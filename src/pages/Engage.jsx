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

  // Fake API request instead of calling real /api/raffle-feedback
  try {
    console.log("Simulating form POST:", formData);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate success response
    setSubmitted(true);
  } catch (err) {
    alert("Something went wrong: " + err.message);
  }
};


  return (
    <main className="min-h-screen bg-bg text-primary font-body flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gold animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-center lowercase">
          we’d love your feedback!
        </h1>

        {submitted ? (
          <p className="text-lg text-center text-green-600 font-semibold">Thank you for sharing! 💛</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="story" className="block mb-2 text-lg font-semibold">My favourite bedtime story is…</label>
              <input
                required
                name="story"
                id="story"
                value={formData.story}
                onChange={handleChange}
                className="w-full p-3 border border-primary rounded-lg"
                placeholder="Enter your favorite story"
              />
            </div>

            <div>
              <label htmlFor="prize" className="block mb-2 text-lg font-semibold">Suggest a prize you’d love to win</label>
              <input
                required
                name="prize"
                id="prize"
                value={formData.prize}
                onChange={handleChange}
                className="w-full p-3 border border-primary rounded-lg"
                placeholder="Enter your dream prize"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-primary py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
