<?php

use Models\File;

class DeleteFileQueue implements DeleteFileQueueRepository{

	public function fire($job, $data){
		$file = $data->file;
		$file = unserialize($file);
		$id = $file->id;
		if ($id != null) {
			$file->deleteFile($id);
		}

		$job->delete();
	}

	public function test()
	{
		$files = File::get();
		return $files->toArray();
	}
}
