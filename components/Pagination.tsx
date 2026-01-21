'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Show first 5 pages, then ellipsis, then last page
  const visiblePages = pages.slice(0, 5);
  const hasMorePages = totalPages > 5;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
      {/* Show X/page dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show</span>
        <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>10/page</option>
          <option>20/page</option>
          <option>50/page</option>
        </select>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Prev
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              w-9 h-9 rounded-lg text-sm font-medium transition-colors
              ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
              }
            `}
          >
            {String(page).padStart(2, '0')}
          </button>
        ))}

        {hasMorePages && (
          <>
            <button
              className="w-9 h-9 rounded-lg text-sm text-gray-700 hover:bg-gray-100 border border-gray-300"
            >
              ...
            </button>
            <button
              onClick={() => onPageChange(totalPages)}
              className={`
                w-9 h-9 rounded-lg text-sm font-medium transition-colors
                ${
                  currentPage === totalPages
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 border border-gray-300'
                }
              `}
            >
              {String(totalPages).padStart(2, '0')}
            </button>
          </>
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
}
