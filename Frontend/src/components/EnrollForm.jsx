import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function EnrollForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'English'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enrollmentData = {
        ...formData,
        bookId: book.id,
        bookName: book.name,
        enrollmentDate: new Date()
      };

      await axios.post('http://localhost:4001/enrollments', enrollmentData);
      toast.success('Successfully enrolled in the course!');
      navigate('/course');
    } catch (error) {
      console.error(error);
      toast.error('Failed to enroll. Please try again.');
    }
  };

  if (!book) {
    return <div>No book information available</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-purple-50 to-transparent dark:via-slate-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Book Details Section */}
            <div className="md:w-1/3 bg-gradient-to-r from-pink-500 to-purple-500 p-8 text-white">
              <div className="mb-8">
                <img src={book.image} alt={book.name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{book.name}</h2>
              <p className="mb-2">{book.title}</p>
              <div className="text-xl font-bold mt-4">
                Price: ${book.price}
                {book.price === '0' && <span className="ml-2 text-sm bg-green-400 px-2 py-1 rounded">Free!</span>}
              </div>
            </div>

            {/* Enrollment Form Section */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Enrollment Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                  Confirm Enrollment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollForm;