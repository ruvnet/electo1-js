import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, Edit, Trash2, Share2, Eye, Filter } from 'lucide-react';
import { libraryItems } from '../data/libraryItems';

const LibrarySection = () => {
  const [items, setItems] = useState(libraryItems);
  const [filter, setFilter] = useState('');

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(filter) || 
    item.type.toLowerCase().includes(filter)
  );

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleShare = (id) => {
    console.log(`Sharing item with id: ${id}`);
    // Implement sharing functionality
  };

  const handleView = (item) => {
    console.log(`Viewing item:`, item);
    // Implement view functionality
  };

  const handleEdit = (item) => {
    console.log(`Editing item:`, item);
    // Implement edit functionality
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Library</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-lg font-mono">Saved Templates and Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center">
            <Input
              placeholder="Filter items..."
              onChange={handleFilter}
              className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 mr-2"
            />
            <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600">
              <Filter className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-cyber-green-400">Name</TableHead>
                  <TableHead className="text-cyber-green-400">Type</TableHead>
                  <TableHead className="text-cyber-green-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-cyber-green-400">{item.name}</TableCell>
                    <TableCell className="text-cyber-green-400">{item.type}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button onClick={() => handleView(item)} className="bg-cyber-green-900 hover:bg-cyber-green-800">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleEdit(item)} className="bg-cyber-green-900 hover:bg-cyber-green-800">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleShare(item.id)} className="bg-cyber-green-900 hover:bg-cyber-green-800">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleDelete(item.id)} className="bg-cyber-green-900 hover:bg-cyber-green-800">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibrarySection;