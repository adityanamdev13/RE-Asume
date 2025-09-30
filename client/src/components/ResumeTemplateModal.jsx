import { FiX } from "react-icons/fi";

export default function ResumeTemplateModal({ handleclose, isOpen }) {
  if (!isOpen) return null; // agar open nahi hai to kuch render hi na kare

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleclose} // backdrop click → close
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // modal ke andar click → ignore
      >
        {/* Modal Header */}
        <div className="bg-white px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-4xl font-normal text-gray-700">Resume Templates</h2>
          <button
            onClick={handleclose}
            className="w-12 h-12 bg-purple-900 hover:bg-purple-800 rounded-full flex items-center justify-center transition-all duration-200"
          >
            <FiX className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)] bg-white">
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg">Your template content will go here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
