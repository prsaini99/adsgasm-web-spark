
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EnrollmentForm from "./EnrollmentForm";

interface EnrollmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const EnrollmentDialog = ({ isOpen, onClose, courseName }: EnrollmentDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enroll in Course</DialogTitle>
          <DialogDescription>
            Complete the form below to enroll in {courseName}
          </DialogDescription>
        </DialogHeader>
        <EnrollmentForm courseName={courseName} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
