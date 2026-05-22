import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Database,
  Cloud,
  Sparkles,
  Network,
  Server,
  Camera,
  Wrench,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export const softwareServices: Service[] = [
  {
    title: 'Custom Web & Mobile Apps',
    description:
      'Internal tools, customer portals, and field-ops apps engineered for reliability and compliance.',
    icon: Code2,
    bullets: ['React + Node stack', 'Audit-ready logging', 'SSO / MFA'],
  },
  {
    title: 'ERP &amp; CRM Implementation',
    description:
      'Branch-level ERP, CRM, and HRMS deployments — configured for banking, education, and PSU workflows.',
    icon: Database,
    bullets: ['Odoo · Zoho · SAP B1', 'Migration from legacy', 'On-site rollout'],
  },
  {
    title: 'Cloud &amp; DevOps',
    description:
      'Lift-and-shift to AWS / Azure with hardened CI/CD, monitoring, and disaster recovery built in.',
    icon: Cloud,
    bullets: ['AWS · Azure · OCI', 'Zero-downtime cutover', 'IaC + alerting'],
  },
  {
    title: 'AI &amp; Data Integration',
    description:
      'Practical AI on top of your data — document automation, search, and forecasting that ships.',
    icon: Sparkles,
    bullets: ['Document AI', 'Retrieval search', 'Custom dashboards'],
  },
];

export const hardwareServices: Service[] = [
  {
    title: 'Enterprise Networking',
    description:
      'Structured cabling, switching, routing, and Wi-Fi for branches, campuses, and hospitals.',
    icon: Network,
    bullets: ['Cisco · Aruba · Fortinet', 'OSP / ISP fiber', 'Site survey + design'],
  },
  {
    title: 'Infrastructure &amp; Servers',
    description:
      'Racks, servers, UPS, and storage — procured, racked, and commissioned with a clean handover.',
    icon: Server,
    bullets: ['HPE · Dell · Lenovo', 'NAS / SAN storage', 'UPS + power planning'],
  },
  {
    title: 'Surveillance &amp; Access',
    description:
      'IP CCTV, NVR, biometric access, and boom-barrier integration for campuses and PSU sites.',
    icon: Camera,
    bullets: ['IP CCTV + NVR', 'Biometric access', 'Boom + RFID'],
  },
  {
    title: 'On-site IT Support',
    description:
      'AMC, break-fix, and resident-engineer programs across our Pan-India service footprint.',
    icon: Wrench,
    bullets: ['24/7 helpdesk', 'AMC + ADC', 'Resident engineers'],
  },
];
