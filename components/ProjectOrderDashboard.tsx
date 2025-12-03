"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  DollarSign,
  CheckCircle,
  Clock,
  Heart,
  Calendar,
  ShoppingCart,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { DashboardData } from "@/types";

interface ProjectOrderDashboardProps {
  data: DashboardData;
}

const ProjectOrderDashboard: React.FC<ProjectOrderDashboardProps> = ({
  data,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Icon mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    dollar: <DollarSign className="w-4 h-4" />,
    check: <CheckCircle className="w-4 h-4" />,
    clock: <Clock className="w-4 h-4" />,
    heart: <Heart className="w-4 h-4" />,
    calendar: <Calendar className="w-4 h-4" />,
    shopping: <ShoppingCart className="w-4 h-4" />,
    trending: <TrendingUp className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    zap: <Zap className="w-4 h-4" />,
  };

  // Convert stats object to chart data
  const statsEntries = Object.entries(data.stats);
  const total = statsEntries[0][1]; // First entry is total
  const colorKeys = Object.keys(data.colors);

  const chartData = statsEntries.slice(1).map((entry, index) => ({
    name: entry[0]
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()),
    value: entry[1],
    color: data.colors[colorKeys[index] as keyof typeof data.colors],
  }));

  return (
    <div className="w-full h-full min-h-[420px] min-w-[280px] bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-4 md:p-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-lg font-bold text-gray-900">
            {data.title}
          </h3>
          <span className="text-xs text-gray-500">Last 30 days</span>
        </div>

        {/* Donut Chart Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Chart */}
            <div className="relative w-32 h-32 md:w-36 md:h-36 min-w-[128px] min-h-[128px]">
              {isClient ? (
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                  minHeight={128}
                  minWidth={128}
                >
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={55}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full rounded-full bg-slate-100 animate-pulse" />
              )}
              {/* Center Total */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  {total}
                </span>
                <span className="text-xs text-gray-500">Total</span>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-gray-700">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  {iconMap[metric.icon]}
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs font-semibold">
                    +{metric.change}%
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 mb-1">
                  {metric.label}
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Progress Timeline
          </h4>
          <div className="space-y-3">
            {data.timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-600 w-16">
                  {item.period}
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs font-semibold text-gray-700 w-10 text-right">
                  {item.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrderDashboard;
