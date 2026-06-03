// 1. Accept 'onClose' from the props object
export default function CreateCard({ onClose }: { onClose: () => void }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="w-4xl h-150 bg-bg border border-text-primary/20 bg-background rounded-2xl shadow-2xl p-6">
        {/* Your Form Content / Submit buttons will go here safely */}
        <h2 className="text-xl font-bold">Create New Project</h2>
      </div>
    </div>
  );
}
