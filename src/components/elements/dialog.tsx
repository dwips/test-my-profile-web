import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ModalDialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
}

export function ModalDialog(props: ModalDialogProps) {
  const {
    open,
    title,
    description,
    cancelText,
    actionText,
    onCancel,
    onAction,
  } = props;

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {onCancel && (
            <AlertDialogCancel onClick={onCancel}>
              {cancelText || 'Cancel'}
            </AlertDialogCancel>
          )}
          {onAction && (
            <AlertDialogAction onClick={onAction}>
              {actionText || 'Continue'}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
