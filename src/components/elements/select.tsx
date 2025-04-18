import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

function SelectComponent(props) {
  const { onChange, value, options, placeholder } = props;
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((item) => {
          return <SelectItem value={item.value}>{item.label}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
