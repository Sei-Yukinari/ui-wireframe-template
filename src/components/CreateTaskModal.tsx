export default function CreateTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500/50">
      <div className="w-full max-w-md border border-gray-300 bg-white p-6">
        <h2 className="mb-4 text-base font-bold">Create Task</h2>
        <div className="mb-3">
          <label className="mb-1 block text-sm">Title</label>
          <input type="text" className="w-full border border-gray-300 p-2 text-sm" placeholder="Task title" />
        </div>
        <div className="mb-4">
          <label className="mb-1 block text-sm">Description</label>
          <textarea className="w-full border border-gray-300 p-2 text-sm" rows={3} placeholder="Task description" />
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-400 bg-gray-200 px-4 py-2 text-sm font-bold">Save</button>
          <button onClick={onClose} className="border border-gray-300 px-4 py-2 text-sm">Cancel</button>
        </div>
      </div>
    </div>
  );
}
