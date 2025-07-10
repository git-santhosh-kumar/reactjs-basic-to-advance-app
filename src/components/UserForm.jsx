import { useState } from "react";

export default function UserForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        bio: '',
        gender: '',
        country: '',
        agree: false,
        notifications: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        props.submitForm(formData)
        // alert('Form submitted!');
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            password: '',
            bio: '',
            gender: '',
            country: '',
            agree: false,
            notifications: false,
        });
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <h2 className="text-2xl font-bold mb-6">User Registration Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="John Doe"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>

                {/* Bio */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        rows="3"
                        placeholder="Tell us something about yourself..."
                    />
                </div>

                {/* Gender (Radio) */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Gender</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        Male
                        </label>
                        <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        Female
                        </label>
                    </div>
                </div>

                {/* Country (Select) */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    >
                        <option value="">Select a country</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="india">India</option>
                    </select>
                </div>

                {/* Agree to Terms (Checkbox) */}
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mr-2"
                        />
                        I agree to the terms and conditions
                    </label>
                </div>

                {/* Notifications (Toggle Switch style) */}
                <div className="mb-6">
                    <label className="flex items-center justify-between">
                        <span className="text-sm font-medium">Enable Notifications</span>
                        <input
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleChange}
                        className="peer hidden"
                        id="toggle"
                        />
                        <span className="w-11 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition peer-checked:bg-green-500">
                            <span className="w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform"></span>
                        </span>
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}