
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/context/AppContext";

interface SchoolSelectProps {
  value: number | string;
  onValueChange: (value: string) => void;
  label?: string;
  className?: string;
  country?: string;
}

export function SchoolSelect({ value, onValueChange, label, className, country }: SchoolSelectProps) {
  const { schoolsList } = useAppContext();
  
  // Only showing Cornerstone International Academy (always filtered to Ghana)
  const filteredSchools = schoolsList.filter(school => school.country === "gh");

  return (
    <div className={className}>
      {label && <Label className="mb-2 block">{label}</Label>}
      <Select value={value.toString()} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select school" />
        </SelectTrigger>
        <SelectContent>
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school) => (
              <SelectItem key={school.id} value={school.id.toString()}>
                {school.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="no-schools" disabled>
              No schools available in Ghana
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
