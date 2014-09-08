<?php 

namespace Models;

use Eloquent, FileRepository, Input, Queue, Exception, View, Redirect, DeleteFileQueue, DateTime, DateInterval, Carbon;

class File extends Eloquent implements FileRepository {

	public function getAllFiles() 
	{
		$files = $this->get();

		foreach ($files as $file) {
			$file = $file->formatted();
		}

		return $files->toArray();
	}

	public function getFileByID($id)
	{

		$file = $this->find($id);

		if ($file != null) {

			return $file->formatted();

		} else {

			throw new Exception("Sorry, File ID Not Found"); die();
			
		}
	}

	public function displayFileByID($id)
	{
		$file = $this->find($id);

		if ($file != null) {
			$data = [];

			$path = $file->path . '/' . $file->name;

			// $width = getimagesize($path)[0];
			// $height = getimagesize($path)[1];

			$fullpath = '/' . $path;

			$name = $file->name;

			$extension = $file->extension;

			$timeout = $file->timeout;

			if ($timeout) {
				$remainder = strtotime($timeout) % 60; 

				$timeout = (Carbon::createFromTimestamp(strtotime($timeout))->addSeconds(60-$remainder));

				$seconds = $timeout->diffInSeconds(Carbon::now());
			} else {
				$seconds = 0;
			}
			$data["id"] = $file->id;
			$data["path"] = $fullpath;
			$data["name"] = $name;
			$data["seconds"] = $seconds;

			if (exif_imagetype($path)) {

				$dimensions = getimagesize($path);
				$data["dimensions"] = $dimensions;
				return View::make('files/image', $data);

			} else if ($extension == "pdf") {

				return View::make('files/pdf', $data);

			} else {

				return View::make('files/other', $data);

			}
			
		} else {
			throw new Exception("Sorry, File ID Not Found"); die();
		}
	}

	public function displayFileList()
	{
		$files = $this->getAllFiles();

		$data = ["files" => $files];
		return View::make('files/list', $data);
	}

	public function uploadFile($file)
	{
		if ($file) {
			$newFile = new File();

			$destinationPath = 'uploads/' . str_random(8);
			$newFile->path = $destinationPath;

			
			$filename = $this->spaceToDash($file->getClientOriginalName());
			$newFile->name = $filename;
			

			$extension =$file->getClientOriginalExtension();
			$newFile->extension = $extension;


			$time = intval(Input::get('minutes'));
			if ($time) {
				$timeout = Carbon::now()->addMinutes($time);
				$newFile->timeout = $timeout;
			}


			$uploadSuccess = Input::file('file')->move($destinationPath, $filename);
			 
			if ($uploadSuccess) {

				$path = $destinationPath . '/' . $filename;

				$newFile->size = filesize($path);


				if (exif_imagetype($path)) {

					$newFile->filetype = "image";

					$dimensions = getimagesize($path);
					$width = $dimensions[0];
					$height = $dimensions[1];

					$data = [];

					$data['width'] = $width;
					$data['height'] = $height;
					

					$newFile->data = serialize($data);

				} else if ($extension == "pdf") {

					$newFile->filetype = "pdf";

				} else {

					$newFile->filetype = "other";

				}

				$newFile->save();

				return $newFile->formatted();
			} else {
			   throw new Exception('Something went wrong!'); die();
			}
		} else {
			throw new Exception("You didn't upload a file!"); die();
		}
		
	}

	public function deleteFile($id)
	{
		$file = $this->find($id);

		if ($file != null) {

			$name = $file->name;
			$directory = public_path() . '/' . $file->path;
			$path = $directory . '/' . $name;
			
			$file->delete();
			\File::delete($path);

			//Delete folder if empty
			$allFiles = \File::allFiles($directory);
			if (!count($allFiles)) {
				\File::deleteDirectory($directory);
			}

		} else {
			throw new Exception("Sorry, that file ID does not exist."); die();
		}

		return $file;
	}

	public function spaceToDash($str) 
	{
		return str_replace(' ', '-', $str);
	}

	public function formatted()
	{
		if ($this->data != null) {
			$this->data = unserialize($this->data);
		}

		$path = '/' . $this->path . '/' . $this->name;
		$this->path = $path;
		
		return $this->toArray();
	}
}
