"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@reluna-ui/ui";
import {
  // Arrows & Navigation
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  ChevronsDown,
  ArrowUpRight,
  ArrowDownLeft,
  MoveLeft,
  MoveRight,
  CornerDownLeft,
  CornerDownRight,

  // Actions
  Plus,
  Minus,
  X,
  Check,
  Edit,
  Edit2,
  Edit3,
  Trash,
  Trash2,
  Copy,
  Clipboard,
  ClipboardCheck,
  Download,
  Upload,
  Share,
  Share2,
  ExternalLink,
  Link,
  Link2,
  Unlink,
  RotateCcw,
  RotateCw,
  RefreshCw,
  RefreshCcw,

  // Media
  Play,
  Pause,
  Square,
  Circle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  Video,
  VideoOff,
  Image,
  Film,
  Music,

  // Communication
  Mail,
  MessageSquare,
  MessageCircle,
  Phone,
  PhoneCall,
  PhoneOff,
  Send,
  Inbox,
  Bell,
  BellOff,
  AtSign,

  // Users & People
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users,

  // Files & Folders
  File,
  FileText,
  FilePlus,
  FileMinus,
  FileCheck,
  FileX,
  Folder,
  FolderPlus,
  FolderMinus,
  FolderOpen,
  Archive,

  // UI Elements
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Columns,
  Rows,
  LayoutGrid,
  LayoutList,
  Maximize,
  Minimize,
  Maximize2,
  Minimize2,

  // Status & Alerts
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Ban,
  ShieldCheck,
  ShieldAlert,
  ShieldX,

  // Time & Date
  Clock,
  Timer,
  Hourglass,
  Calendar,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,

  // Settings & Tools
  Settings,
  Settings2,
  Sliders,
  SlidersHorizontal,
  Wrench,
  Cog,
  Filter,
  Search,
  SearchX,
  Zap,
  ZapOff,

  // Data & Charts
  BarChart,
  BarChart2,
  BarChart3,
  BarChart4,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Activity,

  // Devices
  Monitor,
  Laptop,
  Tablet,
  Smartphone,
  Tv,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  Printer,

  // Weather & Nature
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplet,
  Thermometer,

  // Social & Brands
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Chrome,

  // Commerce
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  DollarSign,
  Wallet,
  Receipt,
  Tag,
  Tags,
  Percent,

  // Security
  Lock,
  Unlock,
  Key,
  Shield,
  Eye,
  EyeOff,
  Fingerprint,

  // Maps & Location
  Map,
  MapPin,
  Navigation,
  Compass,
  Globe,
  Home,
  Building,
  Building2,

  // Other Common
  Heart,
  HeartOff,
  Star,
  StarOff,
  Bookmark,
  BookmarkPlus,
  Flag,
  Award,
  Gift,
  Coffee,
  Briefcase,
  GraduationCap,
  Book,
  BookOpen,
  Lightbulb,
  Rocket,
  Target,
  Crosshair,
  Hash,
  Code,
  Code2,
  Terminal,
  Database,
  Server,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  BatteryCharging,
  Power,
  LogIn,
  LogOut,
  type LucideIcon,
} from "lucide-react";

interface IconData {
  name: string;
  icon: LucideIcon;
  category: string;
}

const icons: IconData[] = [
  // Arrows & Navigation
  { name: "ArrowLeft", icon: ArrowLeft, category: "arrows" },
  { name: "ArrowRight", icon: ArrowRight, category: "arrows" },
  { name: "ArrowUp", icon: ArrowUp, category: "arrows" },
  { name: "ArrowDown", icon: ArrowDown, category: "arrows" },
  { name: "ChevronLeft", icon: ChevronLeft, category: "arrows" },
  { name: "ChevronRight", icon: ChevronRight, category: "arrows" },
  { name: "ChevronUp", icon: ChevronUp, category: "arrows" },
  { name: "ChevronDown", icon: ChevronDown, category: "arrows" },
  { name: "ChevronsLeft", icon: ChevronsLeft, category: "arrows" },
  { name: "ChevronsRight", icon: ChevronsRight, category: "arrows" },
  { name: "ChevronsUp", icon: ChevronsUp, category: "arrows" },
  { name: "ChevronsDown", icon: ChevronsDown, category: "arrows" },
  { name: "ArrowUpRight", icon: ArrowUpRight, category: "arrows" },
  { name: "ArrowDownLeft", icon: ArrowDownLeft, category: "arrows" },
  { name: "MoveLeft", icon: MoveLeft, category: "arrows" },
  { name: "MoveRight", icon: MoveRight, category: "arrows" },
  { name: "CornerDownLeft", icon: CornerDownLeft, category: "arrows" },
  { name: "CornerDownRight", icon: CornerDownRight, category: "arrows" },

  // Actions
  { name: "Plus", icon: Plus, category: "actions" },
  { name: "Minus", icon: Minus, category: "actions" },
  { name: "X", icon: X, category: "actions" },
  { name: "Check", icon: Check, category: "actions" },
  { name: "Edit", icon: Edit, category: "actions" },
  { name: "Edit2", icon: Edit2, category: "actions" },
  { name: "Edit3", icon: Edit3, category: "actions" },
  { name: "Trash", icon: Trash, category: "actions" },
  { name: "Trash2", icon: Trash2, category: "actions" },
  { name: "Copy", icon: Copy, category: "actions" },
  { name: "Clipboard", icon: Clipboard, category: "actions" },
  { name: "ClipboardCheck", icon: ClipboardCheck, category: "actions" },
  { name: "Download", icon: Download, category: "actions" },
  { name: "Upload", icon: Upload, category: "actions" },
  { name: "Share", icon: Share, category: "actions" },
  { name: "Share2", icon: Share2, category: "actions" },
  { name: "ExternalLink", icon: ExternalLink, category: "actions" },
  { name: "Link", icon: Link, category: "actions" },
  { name: "Link2", icon: Link2, category: "actions" },
  { name: "Unlink", icon: Unlink, category: "actions" },
  { name: "RotateCcw", icon: RotateCcw, category: "actions" },
  { name: "RotateCw", icon: RotateCw, category: "actions" },
  { name: "RefreshCw", icon: RefreshCw, category: "actions" },
  { name: "RefreshCcw", icon: RefreshCcw, category: "actions" },

  // Media
  { name: "Play", icon: Play, category: "media" },
  { name: "Pause", icon: Pause, category: "media" },
  { name: "Square", icon: Square, category: "media" },
  { name: "Circle", icon: Circle, category: "media" },
  { name: "SkipBack", icon: SkipBack, category: "media" },
  { name: "SkipForward", icon: SkipForward, category: "media" },
  { name: "Rewind", icon: Rewind, category: "media" },
  { name: "FastForward", icon: FastForward, category: "media" },
  { name: "Volume", icon: Volume, category: "media" },
  { name: "Volume1", icon: Volume1, category: "media" },
  { name: "Volume2", icon: Volume2, category: "media" },
  { name: "VolumeX", icon: VolumeX, category: "media" },
  { name: "Mic", icon: Mic, category: "media" },
  { name: "MicOff", icon: MicOff, category: "media" },
  { name: "Camera", icon: Camera, category: "media" },
  { name: "Video", icon: Video, category: "media" },
  { name: "VideoOff", icon: VideoOff, category: "media" },
  { name: "Image", icon: Image, category: "media" },
  { name: "Film", icon: Film, category: "media" },
  { name: "Music", icon: Music, category: "media" },

  // Communication
  { name: "Mail", icon: Mail, category: "communication" },
  { name: "MessageSquare", icon: MessageSquare, category: "communication" },
  { name: "MessageCircle", icon: MessageCircle, category: "communication" },
  { name: "Phone", icon: Phone, category: "communication" },
  { name: "PhoneCall", icon: PhoneCall, category: "communication" },
  { name: "PhoneOff", icon: PhoneOff, category: "communication" },
  { name: "Send", icon: Send, category: "communication" },
  { name: "Inbox", icon: Inbox, category: "communication" },
  { name: "Bell", icon: Bell, category: "communication" },
  { name: "BellOff", icon: BellOff, category: "communication" },
  { name: "AtSign", icon: AtSign, category: "communication" },

  // Users
  { name: "User", icon: User, category: "users" },
  { name: "UserPlus", icon: UserPlus, category: "users" },
  { name: "UserMinus", icon: UserMinus, category: "users" },
  { name: "UserCheck", icon: UserCheck, category: "users" },
  { name: "UserX", icon: UserX, category: "users" },
  { name: "Users", icon: Users, category: "users" },

  // Files
  { name: "File", icon: File, category: "files" },
  { name: "FileText", icon: FileText, category: "files" },
  { name: "FilePlus", icon: FilePlus, category: "files" },
  { name: "FileMinus", icon: FileMinus, category: "files" },
  { name: "FileCheck", icon: FileCheck, category: "files" },
  { name: "FileX", icon: FileX, category: "files" },
  { name: "Folder", icon: Folder, category: "files" },
  { name: "FolderPlus", icon: FolderPlus, category: "files" },
  { name: "FolderMinus", icon: FolderMinus, category: "files" },
  { name: "FolderOpen", icon: FolderOpen, category: "files" },
  { name: "Archive", icon: Archive, category: "files" },

  // UI
  { name: "Menu", icon: Menu, category: "ui" },
  { name: "MoreHorizontal", icon: MoreHorizontal, category: "ui" },
  { name: "MoreVertical", icon: MoreVertical, category: "ui" },
  { name: "Grid", icon: Grid, category: "ui" },
  { name: "List", icon: List, category: "ui" },
  { name: "Columns", icon: Columns, category: "ui" },
  { name: "Rows", icon: Rows, category: "ui" },
  { name: "LayoutGrid", icon: LayoutGrid, category: "ui" },
  { name: "LayoutList", icon: LayoutList, category: "ui" },
  { name: "Maximize", icon: Maximize, category: "ui" },
  { name: "Minimize", icon: Minimize, category: "ui" },
  { name: "Maximize2", icon: Maximize2, category: "ui" },
  { name: "Minimize2", icon: Minimize2, category: "ui" },

  // Status
  { name: "AlertCircle", icon: AlertCircle, category: "status" },
  { name: "AlertTriangle", icon: AlertTriangle, category: "status" },
  { name: "Info", icon: Info, category: "status" },
  { name: "HelpCircle", icon: HelpCircle, category: "status" },
  { name: "CheckCircle", icon: CheckCircle, category: "status" },
  { name: "CheckCircle2", icon: CheckCircle2, category: "status" },
  { name: "XCircle", icon: XCircle, category: "status" },
  { name: "Ban", icon: Ban, category: "status" },
  { name: "ShieldCheck", icon: ShieldCheck, category: "status" },
  { name: "ShieldAlert", icon: ShieldAlert, category: "status" },
  { name: "ShieldX", icon: ShieldX, category: "status" },

  // Time
  { name: "Clock", icon: Clock, category: "time" },
  { name: "Timer", icon: Timer, category: "time" },
  { name: "Hourglass", icon: Hourglass, category: "time" },
  { name: "Calendar", icon: Calendar, category: "time" },
  { name: "CalendarDays", icon: CalendarDays, category: "time" },
  { name: "CalendarCheck", icon: CalendarCheck, category: "time" },
  { name: "CalendarX", icon: CalendarX, category: "time" },
  { name: "CalendarPlus", icon: CalendarPlus, category: "time" },

  // Settings
  { name: "Settings", icon: Settings, category: "settings" },
  { name: "Settings2", icon: Settings2, category: "settings" },
  { name: "Sliders", icon: Sliders, category: "settings" },
  { name: "SlidersHorizontal", icon: SlidersHorizontal, category: "settings" },
  { name: "Wrench", icon: Wrench, category: "settings" },
  { name: "Cog", icon: Cog, category: "settings" },
  { name: "Filter", icon: Filter, category: "settings" },
  { name: "Search", icon: Search, category: "settings" },
  { name: "SearchX", icon: SearchX, category: "settings" },
  { name: "Zap", icon: Zap, category: "settings" },
  { name: "ZapOff", icon: ZapOff, category: "settings" },

  // Charts
  { name: "BarChart", icon: BarChart, category: "charts" },
  { name: "BarChart2", icon: BarChart2, category: "charts" },
  { name: "BarChart3", icon: BarChart3, category: "charts" },
  { name: "BarChart4", icon: BarChart4, category: "charts" },
  { name: "LineChart", icon: LineChart, category: "charts" },
  { name: "PieChart", icon: PieChart, category: "charts" },
  { name: "TrendingUp", icon: TrendingUp, category: "charts" },
  { name: "TrendingDown", icon: TrendingDown, category: "charts" },
  { name: "Activity", icon: Activity, category: "charts" },

  // Devices
  { name: "Monitor", icon: Monitor, category: "devices" },
  { name: "Laptop", icon: Laptop, category: "devices" },
  { name: "Tablet", icon: Tablet, category: "devices" },
  { name: "Smartphone", icon: Smartphone, category: "devices" },
  { name: "Tv", icon: Tv, category: "devices" },
  { name: "Speaker", icon: Speaker, category: "devices" },
  { name: "Headphones", icon: Headphones, category: "devices" },
  { name: "Keyboard", icon: Keyboard, category: "devices" },
  { name: "Mouse", icon: Mouse, category: "devices" },
  { name: "Printer", icon: Printer, category: "devices" },

  // Weather
  { name: "Sun", icon: Sun, category: "weather" },
  { name: "Moon", icon: Moon, category: "weather" },
  { name: "Cloud", icon: Cloud, category: "weather" },
  { name: "CloudRain", icon: CloudRain, category: "weather" },
  { name: "CloudSnow", icon: CloudSnow, category: "weather" },
  { name: "CloudLightning", icon: CloudLightning, category: "weather" },
  { name: "Wind", icon: Wind, category: "weather" },
  { name: "Droplet", icon: Droplet, category: "weather" },
  { name: "Thermometer", icon: Thermometer, category: "weather" },

  // Social
  { name: "Github", icon: Github, category: "social" },
  { name: "Twitter", icon: Twitter, category: "social" },
  { name: "Facebook", icon: Facebook, category: "social" },
  { name: "Instagram", icon: Instagram, category: "social" },
  { name: "Linkedin", icon: Linkedin, category: "social" },
  { name: "Youtube", icon: Youtube, category: "social" },
  { name: "Chrome", icon: Chrome, category: "social" },

  // Commerce
  { name: "ShoppingCart", icon: ShoppingCart, category: "commerce" },
  { name: "ShoppingBag", icon: ShoppingBag, category: "commerce" },
  { name: "CreditCard", icon: CreditCard, category: "commerce" },
  { name: "DollarSign", icon: DollarSign, category: "commerce" },
  { name: "Wallet", icon: Wallet, category: "commerce" },
  { name: "Receipt", icon: Receipt, category: "commerce" },
  { name: "Tag", icon: Tag, category: "commerce" },
  { name: "Tags", icon: Tags, category: "commerce" },
  { name: "Percent", icon: Percent, category: "commerce" },

  // Security
  { name: "Lock", icon: Lock, category: "security" },
  { name: "Unlock", icon: Unlock, category: "security" },
  { name: "Key", icon: Key, category: "security" },
  { name: "Shield", icon: Shield, category: "security" },
  { name: "Eye", icon: Eye, category: "security" },
  { name: "EyeOff", icon: EyeOff, category: "security" },
  { name: "Fingerprint", icon: Fingerprint, category: "security" },

  // Location
  { name: "Map", icon: Map, category: "location" },
  { name: "MapPin", icon: MapPin, category: "location" },
  { name: "Navigation", icon: Navigation, category: "location" },
  { name: "Compass", icon: Compass, category: "location" },
  { name: "Globe", icon: Globe, category: "location" },
  { name: "Home", icon: Home, category: "location" },
  { name: "Building", icon: Building, category: "location" },
  { name: "Building2", icon: Building2, category: "location" },

  // Other
  { name: "Heart", icon: Heart, category: "other" },
  { name: "HeartOff", icon: HeartOff, category: "other" },
  { name: "Star", icon: Star, category: "other" },
  { name: "StarOff", icon: StarOff, category: "other" },
  { name: "Bookmark", icon: Bookmark, category: "other" },
  { name: "BookmarkPlus", icon: BookmarkPlus, category: "other" },
  { name: "Flag", icon: Flag, category: "other" },
  { name: "Award", icon: Award, category: "other" },
  { name: "Gift", icon: Gift, category: "other" },
  { name: "Coffee", icon: Coffee, category: "other" },
  { name: "Briefcase", icon: Briefcase, category: "other" },
  { name: "GraduationCap", icon: GraduationCap, category: "other" },
  { name: "Book", icon: Book, category: "other" },
  { name: "BookOpen", icon: BookOpen, category: "other" },
  { name: "Lightbulb", icon: Lightbulb, category: "other" },
  { name: "Rocket", icon: Rocket, category: "other" },
  { name: "Target", icon: Target, category: "other" },
  { name: "Crosshair", icon: Crosshair, category: "other" },
  { name: "Hash", icon: Hash, category: "other" },
  { name: "Code", icon: Code, category: "other" },
  { name: "Code2", icon: Code2, category: "other" },
  { name: "Terminal", icon: Terminal, category: "other" },
  { name: "Database", icon: Database, category: "other" },
  { name: "Server", icon: Server, category: "other" },
  { name: "Wifi", icon: Wifi, category: "other" },
  { name: "WifiOff", icon: WifiOff, category: "other" },
  { name: "Bluetooth", icon: Bluetooth, category: "other" },
  { name: "Battery", icon: Battery, category: "other" },
  { name: "BatteryCharging", icon: BatteryCharging, category: "other" },
  { name: "Power", icon: Power, category: "other" },
  { name: "LogIn", icon: LogIn, category: "other" },
  { name: "LogOut", icon: LogOut, category: "other" },
];

const categories = [
  { id: "all", label: "All Icons" },
  { id: "arrows", label: "Arrows" },
  { id: "actions", label: "Actions" },
  { id: "media", label: "Media" },
  { id: "communication", label: "Communication" },
  { id: "users", label: "Users" },
  { id: "files", label: "Files" },
  { id: "ui", label: "UI" },
  { id: "status", label: "Status" },
  { id: "time", label: "Time" },
  { id: "settings", label: "Settings" },
  { id: "charts", label: "Charts" },
  { id: "devices", label: "Devices" },
  { id: "weather", label: "Weather" },
  { id: "social", label: "Social" },
  { id: "commerce", label: "Commerce" },
  { id: "security", label: "Security" },
  { id: "location", label: "Location" },
  { id: "other", label: "Other" },
];

export default function IconsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [copiedIcon, setCopiedIcon] = React.useState<string | null>(null);

  const filteredIcons = icons.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyIcon = async (iconName: string) => {
    const code = `<${iconName} className="h-4 w-4" />`;
    await navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 1500);
  };

  return (
    <TooltipProvider delayDuration={300}>
      <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Icons</h1>
            <p className="text-lg text-muted-foreground">
              Beautiful & consistent icons powered by Lucide. Click any icon to copy the JSX code.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="sticky top-14 z-10 bg-background/95 backdrop-blur -mx-4 px-4 py-4 border-b">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search icons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex items-center gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {filteredIcons.length} icons
                </span>
              </div>
            </div>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {filteredIcons.map((iconData) => {
              const IconComponent = iconData.icon;
              const isCopied = copiedIcon === iconData.name;

              return (
                <Tooltip key={iconData.name}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleCopyIcon(iconData.name)}
                      className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border bg-card hover:bg-accent hover:border-primary/50 transition-all duration-200 aspect-square"
                    >
                      <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground truncate w-full text-center">
                        {iconData.name}
                      </span>
                      {isCopied && (
                        <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-xl animate-in fade-in zoom-in duration-200">
                          <div className="flex flex-col items-center gap-1">
                            <Check className="h-5 w-5 text-primary-foreground" />
                            <span className="text-xs text-primary-foreground font-medium">Copied!</span>
                          </div>
                        </div>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    <p>Click to copy: <code className="bg-muted px-1 rounded">{`<${iconData.name} />`}</code></p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          {filteredIcons.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-lg font-medium">No icons found</p>
              <p className="text-sm text-muted-foreground mt-1">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Usage */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Usage</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Import icons from lucide-react:</p>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`import { Home, Settings, User } from "lucide-react";`}</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Use in your components:</p>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`<Home className="h-4 w-4" />
<Settings className="h-5 w-5 text-muted-foreground" />
<User className="h-6 w-6 text-primary" />`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </TooltipProvider>
  );
}
