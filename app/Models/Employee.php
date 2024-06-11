<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Employee
 * 
 * @property int $id
 * @property string|null $uuid
 * @property int $page_id
 * @property string $fio
 * @property string $start_year
 * @property string $image
 * @property string|null $about
 * @property string|null $feature
 * @property string|null $feature_icon
 * @property string|null $image_small
 * @property bool|null $working
 * @property int $priority
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page $page
 * @property Collection|Affiliate[] $affiliates
 * @property Collection|Profession[] $professions
 * @property Collection|Work[] $works
 *
 * @package App\Models
 */
class Employee extends Model
{
	protected $table = 'employees';

	protected $casts = [
		'page_id' => 'int',
		'working' => 'bool',
		'priority' => 'int'
	];

	protected $fillable = [
		'uuid',
		'page_id',
		'fio',
		'start_year',
		'image',
		'about',
		'feature',
		'feature_icon',
		'image_small',
		'working',
		'priority'
	];

	public function page()
	{
		return $this->belongsTo(Page::class);
	}

	public function affiliates()
	{
		return $this->belongsToMany(Affiliate::class);
	}

	public function professions()
	{
		return $this->belongsToMany(Profession::class);
	}

	public function works()
	{
		return $this->belongsToMany(Work::class)
					->withPivot('position');
	}
}
