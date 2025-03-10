
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface CountrySelectProps {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function CountrySelect({ value, onValueChange, label, className }: CountrySelectProps) {
  const countries = [
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "au", name: "Australia" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
    { code: "jp", name: "Japan" },
    { code: "in", name: "India" },
    { code: "br", name: "Brazil" },
    { code: "mx", name: "Mexico" },
    // Add more countries as needed
  ];

  return (
    <div className={className}>
      {label && <Label className="mb-2 block">{label}</Label>}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
