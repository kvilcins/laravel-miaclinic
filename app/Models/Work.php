<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Work
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int $page_id
 * @property int $section_page_id
 * @property int|null $service_id
 * @property string $title
 * @property string $image
 * @property string|null $before
 * @property string|null $after
 * @property string|null $video_link
 * @property string|null $video_text
 * @property string|null $teaser
 * @property bool $published
 * @property bool $show
 * @property int $priority
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page $page
 * @property Service|null $service
 * @property Collection|Employee[] $employees
 * @property Collection|Service[] $services
 * @property Collection|WorkImage[] $work_images
 *
 * @package App\Models
 */
class Work extends Model
{
	protected $table = 'works';

	protected $casts = [
		'page_id' => 'int',
		'section_page_id' => 'int',
		'service_id' => 'int',
		'published' => 'bool',
		'show' => 'bool',
		'priority' => 'int'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'section_page_id',
		'service_id',
		'title',
		'image',
		'before',
		'after',
		'video_link',
		'video_text',
		'teaser',
		'published',
		'show',
		'priority'
	];

	public function page()
	{
		return $this->belongsTo(Page::class, 'section_page_id');
	}

	public function service()
	{
		return $this->belongsTo(Service::class);
	}

	public function employees()
	{
		return $this->belongsToMany(Employee::class)
					->withPivot('position');
	}

	public function services()
	{
		return $this->belongsToMany(Service::class);
	}

	public function work_images()
	{
		return $this->hasMany(WorkImage::class);
	}
}
