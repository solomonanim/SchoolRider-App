
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
  
  // Filter schools by country if provided
  const filteredSchools = country 
    ? schoolsList.filter(school => school.country === country)
    : schoolsList;

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
              {country ? "No schools found in selected country" : "No schools available"}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
