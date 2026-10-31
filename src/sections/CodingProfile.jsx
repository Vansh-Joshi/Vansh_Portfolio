import React from 'react';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import ibLogo from '../assets/ib-logo-square.png';

export default function CodingProfile() {
  return (
    <section className="px-6 py-12 bg-white text-gray-800" id="coding" aria-labelledby="coding-heading">
      <h2 id="coding-heading" className="text-3xl font-semibold mb-6 text-center">Coding Practice</h2>

      <p className="text-center mb-8 text-gray-600">
        While I don’t do competitive coding regularly, I keep my DSA skills sharp with problem-solving on various platforms.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg">
        <div className="flex items-center gap-4">
          <SiLeetcode aria-hidden="true" className="text-yellow-500 text-3xl shrink-0" />
          <span>
            <strong>LeetCode:</strong> 1770 rating —{' '}
            <a
              href="https://leetcode.com/u/202101445/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <SiCodechef aria-hidden="true" className="text-orange-500 text-3xl shrink-0" />
          <span>
            <strong>CodeChef:</strong> 1673 rating —{' '}
            <a
              href="https://www.codechef.com/users/vansh_joshi"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </span>
        </div>
        <div className="flex items-center gap-4">
        <img src={ibLogo} alt="" loading="lazy" className="w-9 h-9 rounded object-contain shrink-0" />
        <span>
            <strong>InterviewBit:</strong> Score 34,816 —{' '}
            <a
            href="https://www.interviewbit.com/profile/vansh-joshi/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
            >
            View Profile
            </a>
        </span>
        </div>
        <div className="flex items-center gap-4">
          <SiGeeksforgeeks aria-hidden="true" className="text-green-600 text-3xl shrink-0" />
          <span>
            <strong>GFG:</strong> 4⭐ rating —{' '}
            <a
              href="https://www.geeksforgeeks.org/user/vanshzbk7/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
