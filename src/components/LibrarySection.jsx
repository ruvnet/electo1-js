import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, Edit, Trash2, Share2, Eye, Filter, Plus } from 'lucide-react';
import { libraryItems } from '../data/libraryItems';
import TemplateForm from './LibrarySection/TemplateForm';
import TemplateView from './LibrarySection/TemplateView';

const LibrarySection = () => {
  const [items, setItems] = useState(libraryItems);
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
    setSelectedItem(item);
    setIsViewModalOpen(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleSave = (newItem) => {
    if (newItem.id) {
      setItems(items.map(item => item.id === newItem.id ? newItem : item));
    } else {
      setItems([...items, { ...newItem, id: Date.now() }]);
    }
    setIsEditModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-cyber-bg text-cyber-green-400">
      <h1 className="text-2xl font-mono font-semibold mb-6">Library</h1>
      <Card className="bg-cyber-black border-cyber-green-700">
        <CardHeader>
          <CardTitle className="text-cyber-green-400 text-lg font-mono">Saved Templates and Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-col sm:flex-row items-center gap-2">
            <Input
              placeholder="Filter items..."
              onChange={handleFilter}
              className="bg-cyber-bg text-cyber-green-400 border-cyber-green-700 w-full sm:w-auto"
            />
            <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600 w-full sm:w-auto">
              <Filter className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-cyber-green-700 text-cyber-black hover:bg-cyber-green-600 w-full sm:w-auto">
                  <Plus className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">New Template</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-cyber-black border-cyber-green-700 text-cyber-green-400 w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[90vh] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle>{selectedItem ? 'Edit' : 'Create'} Template</DialogTitle>
                </DialogHeader>
                <TemplateForm item={selectedItem} onSave={handleSave} />
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-cyber-green-400">Name</TableHead>
                  <TableHead className="text-cyber-green-400 hidden sm:table-cell">Type</TableHead>
                  <TableHead className="text-cyber-green-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-cyber-green-400">{item.name}</TableCell>
                    <TableCell className="text-cyber-green-400 hidden sm:table-cell">{item.type}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button onClick={() => handleView(item)} className="bg-cyber-green-900 hover:bg-cyber-green-800 p-2">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleEdit(item)} className="bg-cyber-green-900 hover:bg-cyber-green-800 p-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleShare(item.id)} className="bg-cyber-green-900 hover:bg-cyber-green-800 p-2 hidden sm:flex">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button onClick={() => handleDelete(item.id)} className="bg-cyber-green-900 hover:bg-cyber-green-800 p-2">
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
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="bg-cyber-black border-cyber-green-700 text-cyber-green-400 w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[90vh] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>View Template</DialogTitle>
          </DialogHeader>
          {selectedItem && <TemplateView item={selectedItem} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LibrarySection;
